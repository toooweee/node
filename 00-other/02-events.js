/**
 * nodejs is built on event-driven architecture, which is central to its ability
 * to handle async operations efficiently. Events allow you to execute code
 * in response to certain actions or occurrences in your application.
 * This is particularly useful in I/O operations, such as reading files,
 * making network requests, or handling user input.
 */

const EventEmitter = require("events");

// The EventEmitter API

// on(event, listener): Adds a listener function to the end of the listeners array for the specified event
// emit(event, [...args]): Emits an event, calling all the listeners registered for that event with the given arguments
// removeListener(event, listener): Removes a listener from the array of the listeners for the specified event
// once(event, listener): Adds a one-time listener function for the specified event. The listener is invoked only the next time the event is fired, after which is removed

const myEmitter = new EventEmitter();

myEmitter.on("event", () => {
  console.log("An event occurred!");
});

myEmitter.emit("event");

myEmitter.on("hello", (name) => {
  console.log(`Welcome, ${name}`);
});

myEmitter.emit("hello", "Alice");

// Using event emitter with a custom class
// When to use
// When you wanna add custom methods or manage additional state related to your events

class CustomEmitter extends EventEmitter {
  logEvent(eventName) {
    console.log(`Event ${eventName} has been triggered`);
  }
}

const customEmitter = new CustomEmitter();

customEmitter.on("event", () => {
  customEmitter.logEvent("event");
});

customEmitter.emit("event");
