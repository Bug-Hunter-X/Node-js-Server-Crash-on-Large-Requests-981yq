# Node.js Server Crash on Large Requests

This repository demonstrates a common issue in Node.js servers where handling large requests can lead to crashes due to memory exhaustion.  The bug.js file contains the problematic code, while bugSolution.js provides a solution using streams to handle large requests effectively.

## Bug Description
The server crashes when it receives a request with a large body because the application attempts to buffer the entire body in memory before processing it.  This approach is inefficient and can easily lead to memory overload for large uploads.

## Solution
The solution involves using streams to process the request body in chunks, preventing the need to buffer the entire body in memory at once.