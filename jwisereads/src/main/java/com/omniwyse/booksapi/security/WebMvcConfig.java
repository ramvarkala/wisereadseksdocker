package com.omniwyse.booksapi.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.omniwyse.booksapi.interceptor.CorsInterCeptor;
import com.omniwyse.booksapi.interceptor.RequestInterceptor;
import com.omniwyse.booksapi.interceptor.SecurityInterceptor;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

    @Autowired
    private RequestInterceptor reqInterceptor;

    @Autowired
    private SecurityInterceptor secInterceptor;

    @Autowired
    CorsInterCeptor corsInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(corsInterceptor);
        registry.addInterceptor(reqInterceptor).addPathPatterns("/**").excludePathPatterns("");
        registry.addInterceptor(secInterceptor);
    }

}