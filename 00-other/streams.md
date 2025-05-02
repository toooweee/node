# Streams

Streams in Node.js are a powerful way to handle reading and writing data in a continuous manner. They allow you to process data efficiently, especially when dealing with large amounts of information or I/O operations

### What are Streams? 

`Streams` are object that allow you to read data from a source or write data to a destination in a continuous manner. They are ideal for processing data piece-by-piece rather than reading or writing entire files or buffers at once. This is especially useful when working with large datasets, as it can significantly reduce memory usage.

### Key concepts: 
- `Flowing Mode`: Data flows automatically from the source to the destination
-  `Paused Mode`: Data needs to be manually read from the source
-  `Readdable Stream`: Streams from which you can read data
-  `Writable Streams`: Streams to which you can write data
-  `Duplex Streams`: Streams that can both read and write data
-  `Transform Streams`: Streams that modify or transform the data as it is read or written.

### Types of Streams:
1. `Readable Streams`: These streams allow you to read data. Examples include `fs.createReadStream()` and `http.IncomingMessage`
2. `Writable Streams`: These streams allow you to write the data. Examples include: `fs.createWriteStream` and `http.ServerResponse`
3. `Duplex Streams`: These streams can read and write the data. Examples include TCP sockets and `net.Duplex`
4. `Transform Streams`: These are a type of duplex streams, that can modify the data as it being read or written. Examples include `zlib.createGzip()` for compression

# Again

### What are Streams

`Streams` are abstract interfaces used to work with `streaming data`.

`Streaming data` refers to data that can be read or written incrementally, piece by piece, rather than all it once.

### Types of streams: 
1. `Readable Streams`: 
   - Used for reading data
   - Examples include `fs.createReadStream` to read files, `http.IncomingMessage` for HTTP requests, and `process.stdin` for reading input from the console
2. `Writable Streams`:
    - Used for writing data
    - Examples include `fs.createWriteStream` to write files, `http.ServerResponse` for HTTP responses, and `process.stdout` for writing output to the console
3. `Duplex Streams`:
   - Streams that are both readable and writable
   - Examples include network sockets (`net.Socket`), zlib streams for compression/decompression, and crypto streams
4. `Transform Streams`:
   - A special type of Duplex stream where the output is a transformed version of input
   - Examples include `zlib.createGzip()` for compressing data, crypto.createCipher for encryption, and other stream manipulation tasks.

