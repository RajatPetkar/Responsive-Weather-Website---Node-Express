const submitBtn = document.getElementById('submitBtn');
let city = document.getElementById('city');
let city_name = document.getElementById('city_name');
let temps = document.getElementById('temp');
let day  = document.getElementById('day');
let today_data = document.getElementById('today_data')

// let tempS = document.getElementById('temp_status');
const getInfo = async (e) =>{
    e.preventDefault();
    // let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da8e93f898403e31da009e138b3e47e2`

        let city_val = city.value;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=da8e93f898403e31da009e138b3e47e2`
        const res =await fetch(url);
        const data = await res.json();
        const arrData = [data];
        city_name.innerText = arrData[0].name;
        temps.innerText = arrData[0].main.temp;
        console.log(arrData[0].main.temp);
       
}

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();
  
    let hours = now.getHours();
    let mins = now.getMinutes();
  
    let periods = "AM";
  
    if (hours > 11) {
      periods = "PM";
      if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
  
    return `${month} ${date} | ${hours}:${mins}${periods}`;
  };

  day.innerHTML = getCurrentDay();

  today_data.innerText = getCurrentTime();

submitBtn.addEventListener('click', getInfo);