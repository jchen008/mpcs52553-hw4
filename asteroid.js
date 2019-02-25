// Run this file with: $ node asteroid.js
// I've provided some helpful starter code.

const api_key = 'ThEWyjBBPDnDKV2CVSqO4gRU3qjBlpkMJo06rwo8'

const start_date = '2019-03-16';
const end_date = '2019-03-23';

const request = require('request');


const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + start_date + '&end_date=' + end_date + '&api_key=' + api_key;



function getData(error, response, body){
    if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        
        var max_name
        var max_distance
        var max_velocity
        var max_diameter = 0

        for (var date in info.near_earth_objects) {
            for (var object in info.near_earth_objects[date]) {
                if (info.near_earth_objects[date][object].is_potentially_hazardous_asteroid == true){

                    var close_approach = info.near_earth_objects[date][object].close_approach_data
                    var diameter = info.near_earth_objects[date][object].estimated_diameter
                    
                    // Update the maximum size object
                    if (diameter.miles.estimated_diameter_max > max_diameter){
                        max_name = info.near_earth_objects[date][object].name
                        max_distance = close_approach[0].miss_distance.miles
                        max_velocity = close_approach[0].relative_velocity.miles_per_hour
                        max_diameter = diameter.miles.estimated_diameter_max
                    }
           
                }
            }
        }
        console.log('Name: ' + max_name)
        console.log('Distance: ' + max_distance)
        console.log('Velocity: ' + max_velocity)

    }
}


request(url, getData)

