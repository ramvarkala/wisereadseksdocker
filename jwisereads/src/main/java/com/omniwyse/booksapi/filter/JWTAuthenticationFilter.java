package com.omniwyse.booksapi.filter;

import static com.omniwyse.booksapi.security.SecurityConstants.EXPIRATION_TIME;
import static com.omniwyse.booksapi.security.SecurityConstants.HEADER_STRING;
import static com.omniwyse.booksapi.security.SecurityConstants.SECRET;
import static com.omniwyse.booksapi.security.SecurityConstants.TOKEN_PREFIX;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Set;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsUtils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.omniwyse.booksapi.entity.UserCredentialsEntity;
import com.omniwyse.booksapi.servicesimpl.MyUserDetailsServiceImpl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private AuthenticationManager authenticationManager;

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res){
		try {
			
			UserCredentialsEntity creds = new ObjectMapper().readValue(req.getInputStream(), UserCredentialsEntity.class);
			if (CorsUtils.isPreFlightRequest(req)) {
				res.setStatus(HttpServletResponse.SC_OK);
			}

			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(creds.getEmail(), creds.getPassword(), new ArrayList<>()));
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain,
			Authentication auth) throws IOException, ServletException {
		String token = Jwts.builder().setSubject(((User) auth.getPrincipal()).getUsername())
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, SECRET).compact();
		res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
		MyUserDetailsServiceImpl.currentUser = ((User) auth.getPrincipal()).getUsername();
		MyUserDetailsServiceImpl.currentToken=token;
		@SuppressWarnings("unchecked")

		Set<GrantedAuthority> roles = (Set<GrantedAuthority>) MyUserDetailsServiceImpl.cache
				.get(((User) auth.getPrincipal()).getUsername());
		SecurityContextHolder.getContext().setAuthentication(
				new UsernamePasswordAuthenticationToken(((User) auth.getPrincipal()).getUsername(), null, roles));
		chain.doFilter(req, res);
	}

}
