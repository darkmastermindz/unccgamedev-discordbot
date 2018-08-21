# unccgamedev-discordbot
Discord Bot made to manage UNCC Game Developer's Discord @UNCCGameDevelopers

## Getting Started

1. Fork repository

2. Create a app bot token key at [Discord Developers](https://discordapp.com/developers/applications/me)

./token.json
```json
{
  "value" : "yourtokenvaluehere"
}
```

3. Run the following in terminal

```bash
$ node index.js
```

4. Any feature changes, create a feature branch and submit a PR. Keep this one feature / fix per PR. 
See guidelines for the "perfect pull request" here: [The Anatomy of a Perfect Pull Request](https://medium.com/@hugooodias/the-anatomy-of-a-perfect-pull-request-567382bb6067)

## Commands
- addrole.js - Add Role to user requires `MANAGE_ROLES` permission.                                                                                                                                                                                         
- ban.js - Perm-Ban requires `BAN_MEMBERS`                                                                                                                                                                                                
- botinfo.js - Gets Bot info                                                                                                                                                                                            
- clear.js - Cleans up a channel. Poofs number of messages Requires `BAN_MEMBERS`                                                                                                                                                                                                
- coins.js                                                                                                                                                                                             
- daily.js                                                                                                                                                                                             
- hello.js                                                                                                                                                                                             
- help.js                                                                                                                                                                                          
- kick.js                                                                                                                                                                                        
- level.js                                                                                                                                                                                          
- prefix.js                                                                                                                                                                                            
- removerole.js                                                                                                                                                                                       
- report.js                                                                                                                                                                                           
- say.js                                                                                                                                                                                              
- serverinfo.js                                                                                                                                                                                       
- stats.js                                                                                                                                                                                        
- tempmute.js

## Utils
- color.js
- errors.js
- exceptions.js
- eventsController.js
