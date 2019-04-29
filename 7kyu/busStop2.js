//a refactor of busStop.js 

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

