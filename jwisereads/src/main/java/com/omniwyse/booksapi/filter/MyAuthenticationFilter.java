package com.omniwyse.booksapi.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.filter.OncePerRequestFilter;

import com.omniwyse.booksapi.security.RequestInfo;

public class MyAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private RequestInfo info;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        info.tenantName.set(request.getHeader("tenant"));
        filterChain.doFilter(request, response);
    }

}
