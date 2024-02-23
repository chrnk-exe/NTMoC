import sys
import os

def memory_limit_half():
    """Limit max memory usage to half."""
    soft, hard = resource.getrlimit(resource.RLIMIT_AS)
    print(soft, hard)
    # Convert KiB to bytes, and divide in two to half
    resource.setrlimit(resource.RLIMIT_AS, (5 * 1024 * 1024 * 1024, hard))

    count = ''
    for i in range(10000000000000000000):
        count += ' ' * 100000000


# def get_memory():
#     with open('/proc/meminfo', 'r') as mem:
#         free_memory = 0
#         for i in mem:
#             sline = i.split()
#             if str(sline[0]) in ('MemFree:', 'Buffers:', 'Cached:'):
#                 free_memory += int(sline[1])
#     return free_memory  # KiB


from multiprocessing import Process

def f(name):
    try:
        memory_limit_half()
        print('f', os.getpid())

    except MemoryError:
        sys.stderr.write('\n\nERROR: Memory Exception\n')
        sys.exit(1)



def main():
    print('main', os.getpid())

    p = Process(target=f, args=('bob',))
    p.start()
    p.join()
    print('main', os.getpid())




if __name__ == '__main__':
    main()