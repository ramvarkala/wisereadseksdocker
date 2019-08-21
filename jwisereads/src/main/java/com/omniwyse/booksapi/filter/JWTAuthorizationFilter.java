package com.omniwyse.booksapi.filter;

import static com.omniwyse.booksapi.security.SecurityConstants.HEADER_STRING;
import static com.omniwyse.booksapi.security.SecurityConstants.SECRET;
import static com.omniwyse.booksapi.security.SecurityConstants.TOKEN_PREFIX;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.omniwyse.booksapi.servicesimpl.MyUserDetailsServiceImpl;

import io.jsonwebtoken.Jwts;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

	public JWTAuthorizationFilter(AuthenticationManager authManager) {
		super(authManager);
	}

	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		String header = req.getHeader(HEADER_STRING);
		res.addHeader("Access-Control-Allow-Origin", "*");
		res.addHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH");
		res.addHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept, tenant, caller,schoolname");
		res.addHeader("Access-Control-Request-Headers", "Authorization, Content-Type, Accept, tenant, caller");
		res.addHeader("Access-Control-Max-Age", "86400");
		if (header == null || !header.startsWith(TOKEN_PREFIX)) {
			if(res.getHeader(HEADER_STRING) == null || !res.getHeader(HEADER_STRING).startsWith(TOKEN_PREFIX)) {
				chain.doFilter(req, res);
				return;
			}
		}
		UsernamePasswordAuthenticationToken authentication = getAuthentication(req,res);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(req, res);
	}

	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request, HttpServletResponse res) {
		String token = null;//request.getHeader(HEADER_STRING);
		/*if(token == null && res.getHeader(HEADER_STRING) != null) {
			token = res.getHeader(HEADER_STRING);
		}*/
		if(res.getHeader(HEADER_STRING) != null) {
			token = res.getHeader(HEADER_STRING);
		}else {
			token = request.getHeader(HEADER_STRING);
		}
		
		
		if (token != null) {
			// parse the token.
			String user = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, "")).getBody()
					.getSubject();
			if (user != null) {
				@SuppressWarnings("unchecked")
				Set<GrantedAuthority> roles = (Set<GrantedAuthority>) MyUserDetailsServiceImpl.cache.get(user);
				return new UsernamePasswordAuthenticationToken(user, null, roles);
			}
			return null;
		}
		return null;
	}

}
