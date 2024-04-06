### Date and Time

When using input type="datetime-local" date is retrived in the following format `2024-01-13T22:45` .
In order to transform date and time from `2024-01-13T22:45` format to date in ISO 8601 format `2024-01-13T22:45:00Z`
create a new Date() passing in datetime-local variable value and then use the toISOString() method. See example below:

```javascript
const formValues = {
            "title": data.get('title'),
            // transform "2024-01-13T22:45" to "2024-01-13T22:45:00Z"
            "start_date": new Date(data.get('dateTime')).toISOString(),
            "venue": data.get('venue'),
            "address": data.get('address')
        }
```

When making http requests to the backend to connect to the database make sure you send date and time in ISO 8601 format. This will prevent issues with the local time displaying incorrectly in the admin portal.

I defined a data table that stores date and time as a timestamp. Timestamps are stored by default in UTC because it's meant to be a time that is unambiguous. When the database received the date and time as `2024-01-13T22:45` it interpreted what I sent in UTC. Once I specified a timezone the date and time stored in UTC correctly reflected the local time and date. 
