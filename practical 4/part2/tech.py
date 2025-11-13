import threading
import time

def daemon():
    print("daemon thread : Starting")
    time.sleep(2)
    print("daemon thread : Exiting")

def non_daemon():
    print("non_daemon thread : Starting")
    time.sleep(1)
    print("non_daemon thread : Exiting")

if __name__ == "__main__":
    t1 = threading.Thread(target=daemon, daemon=True)   
    t2 = threading.Thread(target=non_daemon)            

    t1.start()
    t2.start()
    t1.join()
    t2.join() 
