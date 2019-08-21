package com.omniwyse.booksapi.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;


@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
	@Override
	public Authentication authenticate(Authentication authentication) 
			throws AuthenticationException{
		SimpleGrantedAuthority authority=new SimpleGrantedAuthority("ROLE_BOOK_OWNER");
		List<SimpleGrantedAuthority> authorities =new ArrayList<>();
		authorities.add(authority);
		return new UsernamePasswordAuthenticationToken("sai@omniwyse.com", "test", authorities);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return false;
	}
}