cmd_Release/obj.target/io_uring.node := g++ -o Release/obj.target/io_uring.node -shared -pthread -rdynamic -m64  -Wl,-soname=io_uring.node -Wl,--start-group Release/obj.target/io_uring/io_uring.o -Wl,--end-group /home/ubuntu/nodejs_io_uring/liburing.a
