// 7. Theory Day: Streams vs Buffers vs ReadFile
// Compare: When and why to use each method of file reading.


// Steams
/*
 Steams are used to flow the data to the destination, to do some operations like saving the steamed data.
 It is very helpful and optimized because it do not loads the entire data into memory.
 It sends the data in small chunks which helps memory to not overload.
*/

// Buffers
/*
 Buffers are ASCII values of data to efficiently send or receive data.
 We get buffer data when we read the data from any path or file, which we need to convert into desired decoding type like UTF-8
*/

// ReadFile
/*
 ReadFile is a method provided by fs module.
 There are two types of it Sync and Async version
 both are used to read file from a given path, it requires to pass optional info like reading the data in which decoding format
 In this method generally the data is taken from path to memory then anything we can do, but it is not optimized for big files.
*/