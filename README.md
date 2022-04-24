a)Endpoint: 
POST http://localhost:8080/api/uploadResumeDetails 
Takes in the body of the POST request, a json format of name, current job title, current job  description, current job company. Candidate name is in <first name> space <last name>  format. e.g. John<space>Doe 
The API Returns the generated resume ID in the response. 200  
OK for successful processing, 400 error code for bad request. 
b) GET 
when a request is made to get a resume ID, it is returned. 
/api/getResumeById/<ID> 
GET request.
Gives back the candidate resume details in same json format  
as uploaded. 
GET 
/api/getResumeByName/Name returns resumes whose  
names match the given name. Use URLEncoding (+ sign)  
in name input to denote space. 
e.g. john+doe for John Doe. 
the input should contain both the first name and the last name. Return 400 bad  request if not. 
You should return the resume result(s) that match Both the first name and the last name. 
In case both first name and last name do not BOTH match a candidate, the api response should return resumes with matches for the first name and last name independently. i.e. return  all matches for John (in first name), and all matches for Doe (in last name). 
e.g. John Welkins and Mary Doe resumes will be returned, because either the first name or the  last name is matching. 




Steps to setup my sql server:



brew install mysql
<!-- We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot

To restart mysql after an upgrade:
  brew services restart mysql
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/mysql/bin/mysqld_safe --datadir=/usr/local/var/mysql -->

mysql_secure_installation
<!-- Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No: y

There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 0
Please set the password for root here.

New password: 

Re-enter new password: 

Estimated strength of the password: 50 
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
Success.

By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done! -->

brew services stop mysql
mysql.server start
mysql -u root -p
<!-- Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.28 Homebrew

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement. -->
