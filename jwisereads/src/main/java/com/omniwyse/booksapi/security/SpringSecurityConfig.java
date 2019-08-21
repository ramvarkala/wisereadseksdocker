package com.omniwyse.booksapi.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.omniwyse.booksapi.filter.JWTAuthenticationFilter;
import com.omniwyse.booksapi.filter.JWTAuthorizationFilter;
import com.omniwyse.booksapi.filter.MyAuthenticationFilter;
import com.omniwyse.booksapi.utils.MyAccessDeniedHandler;

@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
@Configuration
@EnableAutoConfiguration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringSecurityConfig.class);

	@Autowired
	UserDetailsService userDetailsService;

	@Autowired
	private MyAccessDeniedHandler accesshandler;

	@Autowired
	CustomAuthenticationProvider authenticationProvider;

	@Override
	protected void configure(HttpSecurity httpsecurity) {
		try {

			LOGGER.debug("**** SpringSecurity config is Triggered ****");

			httpsecurity.csrf().disable();

			httpsecurity.addFilterBefore(new MyAuthenticationFilter(), BasicAuthenticationFilter.class);
			httpsecurity.authorizeRequests().antMatchers("/api/recommended-books/category-wise","/api/users","/api/books/**").permitAll();
			httpsecurity.authorizeRequests().antMatchers(HttpMethod.OPTIONS).permitAll().anyRequest().authenticated()
					.and().addFilter(new JWTAuthenticationFilter(authenticationManager()))
					.addFilter(new JWTAuthorizationFilter(authenticationManager()));

			httpsecurity.httpBasic();

			httpsecurity.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		} catch (Exception e) {
			LOGGER.error("Exception occured ",e);
		}
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
	}

}
