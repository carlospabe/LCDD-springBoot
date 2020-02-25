package com.lcdd.backend;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// Public pages
		http.httpBasic().disable();
		
		// Private pages (all other pages)
		
		// Login form
		
		// Logout
		
		// Disable CSRF at the moment
		http.csrf().disable();
		
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/user/**").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/user/**").permitAll();
		
		http.authorizeRequests().anyRequest().permitAll();
		
	}
}