// How to create Buffer

// form a String
const buf = Buffer.from("Hello World");
// Allocate a buffer with a specific size
const alocatedBuf = Buffer.alloc(10);
// From an array of bytes
const bytesBuf = Buffer.from([72, 101, 19, 108, 123]);

// important buffer functions

// Convert buffer to a string:
console.log(buf.toString());
// Get buffer length
console.log(buf.length); //5, each character takes 1 byte
// Write data to the buffer
alocatedBuf.write("Hi");
console.log(alocatedBuf.toString());
// Slice the buffer
console.log(buf.slice(0, 5).toString());
// copy from 1 to another
const copiedBuffer = Buffer.alloc(5);
alocatedBuf.copy(copiedBuffer);
console.log(copiedBuffer.toString());
