/**
 * You are assigned to build a function to figure out
 * what to display for today's store hours based on current time.
 *
 * The backend engineer have an API at "/store-hours/44" to provide a list
 * of open and close time for this week.
 * Ex. { result : [
 *          { open:"10-28-2018T12:00", close:"10-28-2018T20:00" },
 *          { open:"10-29-2018T13:00", close:"10-29-2018T18:00" },
 *          { open:"10-30-2018T10:00", close:"10-30-2018T19:00" },
 *          { open:"10-31-2018T11:00", close:"10-31-2018T21:00" },
 *          { open:"11-01-2018T12:00", close:"11-01-2018T20:00" },
 *          { open:"11-02-2018T12:00", close:"11-02-2018T20:00" },
 *          { open:"11-03-2018T12:00", close:"11-03-2018T20:00" },
 *     ]}
 *
 * With those information, you have to figure out if you need to display
 * one of those 3.
 *   - 'Open on 11/03 until 10pm'
 *   - 'Closed for the rest of day'
 *   - 'Will open on 11/03 from 12pm to 10pm'
 */

function getStoreHoursText() {
  // Step 1 : Fetching stored data from API
  // Purpose : Check how we make ajax call, and the timing of receiving the data
  const hours = fetchStoreHourData();
  // Follow up : If you need to make 2 API calls for OPEN and CLOSE hours

  // Step 2 : Loop thorugh the array with data conversion
  // Purpose : Examine knowledge of looping and data manipulcation
  const parsedHours = parseHours(hours);
  // Follow up : slice() vs substring()
  // https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring

  // Step 3 : Convert the marshalled data into human readable string
  // Purpose : Testing String concatenation skill and conditional logic
  const output = toHumanString(parsedHours);
  //Follow up : what if we need to display Monday instead of 11/03

  return output;
}

getStoreHoursText();
