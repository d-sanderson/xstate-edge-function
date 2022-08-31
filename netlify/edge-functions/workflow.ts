import { createMachine } from 'https://cdn.skypack.dev/xstate';

const nameOfMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAZpglgYwBkcoALZAOilTDADsBiAUQDc7kACARkVAAcB7WDmQ5+tHiAAeiAMwB2cnICcABgAcAVhmcAbBp1K9cjQBoQAT0ScZG8hrUAWBzpcb7KhzJkBfb2bRYuITEZOTmYAA2EfwA7kystBwATBICQiJiEtIInKrkKpycDkqqxXJy6maWCEkqOuRK9klySUkyOjJqukm+-hjY+ESkFNQQ8WzsKUggacKi4tPZ5eRqSRrGqqXlrVWy+uQOtV5NSq0Ocr5+ILT8EHASAQPBw5TUdKmCc5mLiAC0nElOOQkp4dC1tpwtOtdjU1g1nHVXM4ZEkdL0QI8gkNQuEorEPul5llZGpyNYNKo5NYHCpVLkYYCHHZ1kklJwClo5F01OjMYMQiNIASvgtQNl5ECwYdOC0ZE4dKsHAyisy5Npamo1HVTrz+liBcKMqKpH8irYQe1wS1ITYdDCOuQdJCqVzEUo5A4NA5Lt4gA */
createMachine({
  tsTypes: {} as import("./workflow.typegen").Typegen0,
  schema: {
    context: {} as { contextType },
    events: {} as { type: "eventType" },
  },
  id: "trafficLight",
  initial: "green",
  states: {
    green: {
      on: {
        "Event 1": {
          target: "yellow",
        },
      },
    },
    yellow: {
      on: {
        "Event 2": {
          target: "red",
        },
      },
    },
    red: {
      on: {
        "Event 2": {
          target: "green",
        },
      },
    },
  },
});
export default async function() {

    return new Response("Hello from the edge!")
}