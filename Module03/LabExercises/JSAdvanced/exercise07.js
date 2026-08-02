/*7. The following DigitalClock class uses an interval to print the time every second once
started, until stopped.
class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
myClock.start()
a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.
b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.*/



class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
myClock.start()




/* MY ANSWERS:

A] class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();


class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {   
    super(prefix);                          
    this.precision = precision;             
  }
  start() {                                 
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const fast = new PrecisionClock('fast clock:', 200); 
fast.start();


Output: my clock: 16:35:09
fast clock: 16:35:09
fast clock: 16:35:09
fast clock: 16:35:09
fast clock: 16:35:10
fast clock: 16:35:10
my clock: 16:35:10
fast clock: 16:35:10
fast clock: 16:35:10
fast clock: 16:35:10
fast clock: 16:35:11
fast clock: 16:35:11
my clock: 16:35:11
fast clock: 16:35:11
fast clock: 16:35:11
fast clock: 16:35:11
fast clock: 16:35:12
fast clock: 16:35:12
my clock: 16:35:12
fast clock: 16:35:12
fast clock: 16:35:12
fast clock: 16:35:12
fast clock: 16:35:13
fast clock: 16:35:13
my clock: 16:35:13
fast clock: 16:35:13
fast clock: 16:35:13
fast clock: 16:35:13
fast clock: 16:35:14
fast clock: 16:35:14
=========================
B]class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();


class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {   
    super(prefix);                          
    this.precision = precision;             
  }
  start() {                                 
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const fast = new PrecisionClock('fast clock:', 200); 
fast.start();

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = '07:00') {   
    super(prefix);
    this.wakeupTime = wakeupTime;
  }
  display() {                                    
    super.display();                            
    let date = new Date();
    let [hours, mins] = [date.getHours(), date.getMinutes()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    let now = `${hours}:${mins}`;                
    if (now === this.wakeupTime) {              
      console.log('Wake Up!');
      this.stop();                               
    }
  }
}

const alarm = new AlarmClock('alarm clock:', '07:00');
alarm.start();


Output: my clock: 16:36:42
fast clock: 16:36:42
alarm clock: 16:36:42
fast clock: 16:36:42
fast clock: 16:36:42
fast clock: 16:36:43
fast clock: 16:36:43
my clock: 16:36:43
alarm clock: 16:36:43
fast clock: 16:36:43
fast clock: 16:36:43
fast clock: 16:36:43
fast clock: 16:36:44
fast clock: 16:36:44
my clock: 16:36:44
alarm clock: 16:36:44
fast clock: 16:36:44
fast clock: 16:36:44
fast clock: 16:36:45
fast clock: 16:36:45
fast clock: 16:36:45
my clock: 16:36:45
alarm clock: 16:36:45
fast clock: 16:36:45
fast clock: 16:36:45
fast clock: 16:36:46
fast clock: 16:36:46
fast clock: 16:36:46
my clock: 16:36:46
alarm clock: 16:36:46
fast clock: 16:36:46
fast clock: 16:36:46
fast clock: 16:36:47
fast clock: 16:36:47
fast clock: 16:36:47
my clock: 16:36:47
alarm clock: 16:36:47
fast clock: 16:36:47
fast clock: 16:36:47
fast clock: 16:36:48
fast clock: 16:36:48
fast clock: 16:36:48
=========================

*/