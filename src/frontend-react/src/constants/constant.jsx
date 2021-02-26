//TODO: Team members working on a different machine to the one being hosted on - change the constant URL here!!!

/*
Setup constant for Spring Host - this will be changed in production *Include port but no endpoints!*

When testing on the local machine, use the localhost address

When testing on other machines on your network - replace localhost with your internal LAN IP Address! 
You will need to either allow your IP address in the Spring Security CORS config (JWTSecurityConfig.java) or use a browser extension to ignore CORS (unsafe!).
*/

export const SpringHostURL = 'http://localhost:8080'