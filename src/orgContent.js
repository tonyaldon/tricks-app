const orgContent = `
* Scripts
** Makefile
*** Where can I find a good tutorial on Makefile?
- See [[https://makefiletutorial.com/][makefile tutorial]].
*** What is a Makefile?
- See [[https://opensource.com/article/18/8/what-how-makefile][What is a Makefile?]] by Sachin Patil.
*** How to use wildcard in Makefile?
- Use the function ~wildcard~ of the ~make~ syntax.
- See [[https://stackoverflow.com/questions/11184389/what-does-wildcard-mean-in-makefile][wildcard in makefile]] on stackoverflow.
- If you have two source files ~foo.c~ and ~bar.c~, to set the value
  of the variable ~programs~ with ~foo.c bar.c~, add this line to your
  ~Makefile~:

#+BEGIN_SRC makefile
programs:=$(wildcard *.c)
#+END_SRC

** bash script
*** Where can I find a good cheatsheet about bash scripting?
- See bash scripting cheatsheet on [[https://devhints.io/bash][devhints.io]].
*** How can I know the status of the last command run in my terminal?
- Use ~$?~ symbol and ~echo~ command.
- ~echo~: display a line of text.
- See [[https://linuxize.com/post/bash-functions/][bash functions]].
- If you want to print the status of the last command run in your
  terminal, run the command:

#+BEGIN_SRC bash
echo $?
#+END_SRC

- When a bash function completes, its return value is the *status* of
  the last statement executed in the function, ~0~ for /success/ and
  non-zero decimal number in the ~1 - 255~ range for /failure/.
** Format outputs
*** How can I format numbers in bash script?
- Use ~printf~ command.
- ~printf~: format and print data.
- See [[https://unix.stackexchange.com/questions/404100/formatting-numerical-output-in-bash-to-have-exactly-4-decimal-places][formatting numerical output in bash]].
- If you want to transform ~12.3~ to ~12~ and ~3.62~ to ~03~, the
  ~printf~ format to use is ~%02.0f~. So, running the following
  command gives you the expected results:

#+BEGIN_SRC bash
printf "%02.0f" 12.3
printf "%02.0f" 3.62
#+END_SRC

* Package management
** Linux packages
*** How can I list linux packages related to a regexp?
- Use ~apt-cache search~ command.
- ~apt-cache search~: perform a full text search on all
  available package lists for the POSIX regex pattern given.
- If you want to search linux packages related to ~emacs~, run the
  command:

#+BEGIN_SRC bash
apt-cache search emacs
#+END_SRC

*** How can I show linux package information?
- Use ~apt-cache show~ command.
- ~apt-cache show~: display the package records for the named
  packages.
- If you want to show the information of the installed ~emacs~
  package, run the command:

#+BEGIN_SRC bash
apt-cache show emacs
#+END_SRC

*** How can I update the list of available linux packages?
- Use ~apt-get update~ command.
- ~apt-get update~: this command is used to resynchronize the package
  index files from their sources.
*** How can I list the installed packages?
- Use ~apt list~ command.
- ~apt list~: list package satifying certain criteria.
- See [[https://linuxize.com/post/how-to-list-installed-packages-on-ubuntu/][list installed packages]] by linuxize.
- If you want to list all installed packages, run the command:

#+BEGIN_SRC bash
apt list --installed
#+END_SRC

- If you want to check if the package ~emacs~ is installed, run the
  command:

#+BEGIN_SRC bash
apt list --installed | grep emacs
#+END_SRC

*** How can I install newest versions of all my packages?
- Use ~apt-get upgrade~ command.
- This command installs the newest versions of all packages currently
  installed on the system from the sources enumerated in
  ~etc/apt/sources.list~ file.
*** How can I install a new linux package?
- Use ~apt-get install~ command.
- ~apt-get install~: install new one or more linux packages.
- If you want to install ~emacs~, run the command:

#+BEGIN_SRC bash
apt-get install emacs
#+END_SRC

*** How can I remove a linux package?
- Use ~apt-get remove~ command.
- ~apt-get remove~: remove linux packages. Note that removing a package leaves its configuration files on the system.
- If you want to remove ~emacs~, run the command:

#+BEGIN_SRC bash
apt-get remove emacs
#+END_SRC

*** How can I get the list of the libraries a command depends on?
- Use ~ldd~ command.
- ~ldd~: print shared object dependencies.
- If you want to list the library dependencies of the ~ls~ command,
  run the command:

#+BEGIN_SRC bash
ldd /bin/ls
#+END_SRC

- On my computer the previous command gave me:

#+BEGIN_SRC text
linux-vdso.so.1 (0x00007ffeeb143000)
libselinux.so.1 => /lib/x86_64-linux-gnu/libselinux.so.1 (0x00007f2203fc5000)
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f2203bd4000)
libpcre.so.3 => /lib/x86_64-linux-gnu/libpcre.so.3 (0x00007f2203962000)
libdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007f220375e000)
/lib64/ld-linux-x86-64.so.2 (0x00007f220440f000)
libpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007f220353f000)
#+END_SRC

** npm for nodejs
*** How can I list the the nodejs installed packages?
- Use ~ls~ subcommand of ~npm~.
- ~npm ls~: Print packages' version that are installed, as well as
  their dependencies, in a tree-structure.
- If you want to list the installed packages in your ~node~ project,
  in root directory of your project run the command:

#+BEGIN_SRC bash
npm ls
#+END_SRC

- If you want to list the ~node~ installed packages globaly in your
  machine, run the command:

#+BEGIN_SRC bash
npm ls -g
#+END_SRC

- If you want to list only the /name@version/ of the installed
  packages in your ~node~ project, you have to limite the depth of the
  printed tree. To do so, run the command:

#+BEGIN_SRC bash
npm ls -g --depth=0
#+END_SRC

** pip for python
*** What is pip?
- ~pip~ is a package installer for python. You can use ~pip~ to install
  packages from the Python Package Index and other indexes.
- See [[https://pypi.org/project/pip/][pip]] on pypi.
** brew for missing packages on macOS
*** How can I install brew?
- See [[https://brew.sh/][brew]] homepage.
- To install ~brew~, run the command:

#+BEGIN_SRC bash
/bin/bash -c "$(curl -fsSL \
  https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
#+END_SRC

** nix
*** What is nix?
- [[https://nixos.org/][nixos (homepage)]]
- [[https://nixos.org/nixos/nix-pills/why-you-should-give-it-a-try.html][why you should give it a try]]
- [[https://engineering.shopify.com/blogs/engineering/what-is-nix][what is nix]]
- [[https://edolstra.github.io/pubs/phd-thesis.pdf][phd-thesis (on nix)]]
- [[https://nix.dev/][nix.dev]]
- [[https://nixcloud.io/main/en/][nixcloud]]
- [[https://github.com/rycee/home-manager][home-manager (nix)]]

* Users and groups
** Sudo and Root
*** How can I switch to root user?
- Use ~su~ command.
- ~su~: change user ID or become superuser.
- See [[https://linuxize.com/post/su-command-in-linux/][su command]] by linuxize.
- If you want to run an interactive shell as root when root's
  password is already defined, run the command:

#+BEGIN_SRC bash
su
#+END_SRC

- If you want to run an interactive shell as root when root's
  password is not defined, run the command:

#+BEGIN_SRC bash
sudo su -
#+END_SRC

*** How can I add a user to the sudo group?
- Use ~usermod~ command.
- ~usermod~: modify a user account.
- If you want to add the user ~jim~ to the group ~sudo~, run the
  command:

#+BEGIN_SRC bash
sudo usermod -aG sudo jim
#+END_SRC

*** How can I remove a user from the sudo group?
- Use ~deluser~ command.
- ~deluser~: remove a user from the system.
- If you want to remove the user ~jim~ from the group ~sudo~, run the
  command:

#+BEGIN_SRC bash
sudo deluser jim sudo
#+END_SRC

*** How can I modify the sudo password timeout?
- Use ~visudo~ command.
- ~visudo~: edit the sudoers file in a safe fashion.
- See [[https://www.maketecheasier.com/change-the-sudo-password-timeout-in-ubuntu][sudo password timeout]] by maketecheasier.
- If you want to change the default (15mins) sudo password timeout to
  ~30mins~, change the line ~Defaults  env_reset~ to the line
  ~Defaults  env_reset, timestamp_timeout=30~ in the file
  ~/etc/sudoers~, not directly, but by running the command:

#+BEGIN_SRC bash
sudo visudo
#+END_SRC

- If you want to check the existing sudoers file for syntax errors
  and mode, run the command:

#+BEGIN_SRC bash
sudo visudo -c
#+END_SRC

- If you want that the system prompt you for password everytime you
  use ~sudo~, set the sudo password timeout to ~0~, by changing the
  line ~Defaults  env_reset~ to the line ~Defaults  env_reset,
  timestamp_timeout=0~ in the file ~/etc/sudoers~, not directly, but
  by running the command:

#+BEGIN_SRC bash
sudo visudo
#+END_SRC

** Groups
*** How can I list all groups a user is a member of?
- Use ~groups~ command.
- ~groups~: print the groups a user is in.
- See [[https://linuxize.com/post/how-to-list-groups-in-linux/][how to list groups in linux]] by linuxize.
- If you want to list the groups the user ~jim~ is a member of, run
  the command:

#+BEGIN_SRC bash
groups jim
groups # if you're logged as jim
#+END_SRC

*** How can I list all groups present on the system?
- Use ~getent~ command.
- ~getent~: get entries from Name Service Switch libraries.
- See [[https://linuxize.com/post/how-to-list-groups-in-linux/][how to list groups in linux]] by linuxize.
- If you want to list all groups present on the system, run the command:

#+BEGIN_SRC bash
getent group
#+END_SRC

** Passwords
*** How can I enable root user account?
- Use ~passwd~ command.
- ~passwd~: change user password.
- See [[https://linuxize.com/post/how-to-enable-and-disable-root-user-account-in-ubuntu/][root user account]] by linuxize.
- If you want to enable the root user account and you have the sudo
  privileges, run the command:

#+BEGIN_SRC bash
sudo passwd root
#+END_SRC

- If you want to disable the root user account and you have the sudo
  privileges, run the command:

#+BEGIN_SRC bash
sudo passwd -l root
#+END_SRC

*** How can I encrypt a password that can be used in the /etc/shadow file?
- Use ~mkpasswd~ command.
- ~mkpasswd~: Encrypts the given password with the crypt(3) libc
  function using the given salt.
- See examples [[https://superuser.com/questions/371442/how-to-use-mkpasswd-to-generate-a-password-in-shadow-file-in-ubuntu-10-lucid][generate a password in shadow file]] on stackexchange.
- If you want to encrypt a password into ~SHA 512~ hash with the
  given /salt/ ~saltsalt~, run the command (and type your password):

#+BEGIN_SRC bash
mkpasswd -m sha-512 -S saltsalt
#+END_SRC

- If you want to encrypt a password into ~SHA 512~ hash without
  specifying the /salt/ (a random one will be provide), run the
  command (and type your password):

#+BEGIN_SRC bash
mkpasswd -m sha-512
#+END_SRC

- I you want to list all the encryption methods, run the command:

#+BEGIN_SRC bash
mkpasswd -m help
#+END_SRC

- I you want to install the ~mkpasswd~ command, you have to
  install the package ~whois~. To do so, run the command:

#+BEGIN_SRC bash
sudo apt install whois
#+END_SRC

** UID
*** How can I modify the UID of an user on linux?
- Use ~usermod~ command.
- ~usermod~: modify a user account.
- See [[https://www.tecmint.com/usermod-command-examples/][usermod command example]] by linuxize.
- If you want to modify the UID of the user ~tony~ to the number
  ~1050~ for instance, run the command:

#+BEGIN_SRC bash
usermod -u 1050 tony
#+END_SRC

- If you want to print the UID of the user ~tony~, run the command:

#+BEGIN_SRC bash
id tony
id   # if you're logged as tony
#+END_SRC

** Miscellaneous
*** What adduser command is for?
- ~adduser~: add a user to the system.
*** What addgroup command is for?
- ~addgroup~: add a group to the system.
*** What delgroup command is for?
- ~delgroup~: remove a user from the system.
*** What chown command is for?
- ~chown~: change file owner and group.
*** What chgrp command is for?
- ~chgrp~: change group ownership.

* Process and system
** pm2
*** How can I install pm2?
- Use ~npm~ command.
- ~npm~: javascript package manager.
- If you want to install ~pm2~ globaly, run the command:

#+BEGIN_SRC bash
npm install pm2 -g
#+END_SRC

- If you want to start your ~app.js~ application, run the command:

#+BEGIN_SRC bash
pm2 start app.js
#+END_SRC

*** How can I start and daemonize applications with pm2?
- Use ~pm2 start~ command.
- ~pm2 start~: start and daemonize an app.
- See [[https://pm2.keymetrics.io/docs/usage/quick-start/][quick start]] from the documentation.
- If you want to /start/ and /daemonize/ with ~pm2~ your application
  that normally start by running ~npm start~, run the command:

#+BEGIN_SRC bash
pm2 start npm -- start
#+END_SRC

- If you want to /start/ and /daemonize/ with ~pm2~ your application
  that normally start by running ~npm start -- --port=5000~, run
  the command:

#+BEGIN_SRC bash
pm2 start npm -- start --port=5000
#+END_SRC

- If you want to /start/ and /daemonize/ with ~pm2~ your application
  that normally start by running ~npm start~ and give it the
  /name/ ~my-app~ run the command:

#+BEGIN_SRC bash
pm2 start npm --name my-app -- start
#+END_SRC

*** How can I automatically restart application on boot/reboot?
- Use ~pm2 startup~ and ~pm2 save~ commands.
- ~pm2 startup~: enable the pm2 startup hook.
- ~pm2 save~: freeze a process list for automatic respawn.
- See [[https://pm2.keymetrics.io/docs/usage/quick-start/][quick start]] from the documentation.
- If you want that ~pm2~ automatically ~restart~ on boot/reboot
  and run the saved processes, you have to enable the ~pm2~
  /startup hook/ and /freeze/ a list of the current running
  processes. To do so, run the commands:

#+BEGIN_SRC bash
pm2 startup  #then copy/past and run the generated command
pm2 save
#+END_SRC

- If you want to revert the action ~pm2 startup~, run the command:

#+BEGIN_SRC bash
pm2 unstartup  #then copy/past and run the generated command
#+END_SRC

*** What are the common actions I want to do with pm2?
- See [[https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/][documentation]] and ~pm2 --help~.
- List of commands, without description:

#+BEGIN_SRC bash
pm2 example
pm2 list
pm2 show <name|id>
pm2 stop <name|id>
pm2 delete <name|id>
pm2 restart <name|id>
pm2 status
pm2 start
pm2 logs
#+END_SRC

- List of options, without description: ~--watch~,
  ~--ignore-watch~, ~--watch-delay~.
** CPU
*** How can I know the caracteristics of my CPU?
- Use ~lscpu~ command.
- ~lscpu~: display information about the CPU architecture.
- See [[https://unix.stackexchange.com/questions/218074/how-to-know-number-of-cores-of-a-system-in-linux][number of cores of as system]] on stackexchange.
- If you want to know how many /physical CPU/ do you have, run the
  command ~lscpu~ and see the line which starts with ~Socket(s):~.
- If you want to know how many /core per socket/ do you have, run the
  command ~lscpu~ and see the line which starts with ~CPU(s):~.
- After running the command ~lscpu~, I get this output:

#+BEGIN_SRC text
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPU(s):              4
On-line CPU(s) list: 0-3
Thread(s) per core:  2
Core(s) per socket:  2
Socket(s):           1
NUMA node(s):        1
Vendor ID:           GenuineIntel
CPU family:          6
Model:               69
Model name:          Intel(R) Core(TM) i5-4300U CPU @ 1.90GHz
Stepping:            1
CPU MHz:             1046.894
CPU max MHz:         2900.0000
CPU min MHz:         800.0000
BogoMIPS:            4988.47
Virtualization:      VT-x
L1d cache:           32K
L1i cache:           32K
L2 cache:            256K
L3 cache:            3072K
NUMA node0 CPU(s):   0-3
Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep
mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss
ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon
pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni
pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16
xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer
aes xsave avx f16c rdrand lahf_lm abm cpuid_fault epb invpcid_single
pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad
fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid xsaveopt dtherm
ida arat pln pts md_clear flush_l1d
#+END_SRC

** hardware
*** How can I get the characteristics of my RAM?
- Use ~lshw~ command.
- ~lshw~: extract detailed information on the hardware configuration
  of the machine.
- See [[https://askubuntu.com/questions/391173/how-to-find-the-frequency-and-type-of-my-current-ram][frequency and type of my current RAM]] on askubuntu.
- If you want to get characteristics of your RAM, run the command:

#+BEGIN_SRC text
sudo lshw -C memory
#+END_SRC

- After running the previous command, I got this output:

#+BEGIN_SRC bash
*-firmware
     description: BIOS
     vendor: Hewlett-Packard
     physical id: c
     version: L71 Ver. 01.07
     date: 02/09/2014
     size: 64KiB
     capacity: 8128KiB
     capabilities: pci pcmcia upgrade shadowing
     cdboot bootselect edd int5printscreen int9keyboard
     int14serial int17printer acpi usb smartbattery
     biosbootspecification netboot uefi
*-cache:0
     description: L1 cache
     physical id: 2
     slot: Unknown
     size: 32KiB
     capacity: 32KiB
     capabilities: asynchronous internal write-back instruction
     configuration: level=1
*-cache:1
     description: L2 cache
     physical id: 3
     slot: Unknown
     size: 256KiB
     capacity: 256KiB
     capabilities: asynchronous internal write-back unified
     configuration: level=2
*-cache:2
     description: L3 cache
     physical id: 4
     slot: Unknown
     size: 3MiB
     capacity: 3MiB
     capabilities: asynchronous internal write-back unified
     configuration: level=3
*-cache
     description: L1 cache
     physical id: 1
     slot: Unknown
     size: 32KiB
     capacity: 32KiB
     capabilities: asynchronous internal write-back data
     configuration: level=1
*-memory
     description: System Memory
     physical id: 7
     slot: System board or motherboard
     size: 4GiB
   *-bank:0
        description: SODIMM DDR3 Synchronous 1600 MHz (0.6 ns)
        product: HMT351S6EFR8A-PB
        vendor: Hynix/Hyundai
        physical id: 0
        serial: 00821224
        slot: Bottom-Slot 1(left)
        size: 4GiB
        width: 64 bits
        clock: 1600MHz (0.6ns)
   *-bank:1
        description: DIMM [empty]
        physical id: 1
        slot: Bottom-Slot 2(right)
#+END_SRC

*** How can I list the hardwares of my system?
- Use ~lshw~ command.
- ~lshw~: extract detailed information on the hardware configuration
  of the machine.
- I you want to list the hardwares of your system, run the command:

#+BEGIN_SRC bash
sudo lshw -short
#+END_SRC

- After running the previous command, I got this output:

#+BEGIN_SRC text
H/W path         Device     Class          Description
======================================================
                            system         HP EliteBook 840 G1 (F9X37UP#ABF)
/0                          bus            198F
/0/c                        memory         64KiB BIOS
/0/0                        processor      Intel(R) Core(TM) i5-4300U CPU @ 1.90GHz
/0/0/2                      memory         32KiB L1 cache
/0/0/3                      memory         256KiB L2 cache
/0/0/4                      memory         3MiB L3 cache
/0/1                        memory         32KiB L1 cache
/0/7                        memory         4GiB System Memory
/0/7/0                      memory         4GiB SODIMM DDR3 Synchronous 1600 MHz (0.6 ns)
/0/7/1                      memory         DIMM [empty]
/0/100                      bridge         Haswell-ULT DRAM Controller
/0/100/2                    display        Haswell-ULT Integrated Graphics Controller
/0/100/3                    multimedia     Haswell-ULT HD Audio Controller
/0/100/14                   bus            8 Series USB xHCI HC
/0/100/14/0      usb2       bus            xHCI Host Controller
/0/100/14/0/3               bus            USB2134B
/0/100/14/0/3/3             input          USB OPTICAL MOUSE
/0/100/14/0/3/4             input          USB Keyboard
/0/100/14/0/5               generic        VFS495 Fingerprint Reader
/0/100/14/0/7               multimedia     HP HD Webcam
/0/100/14/1      usb3       bus            xHCI Host Controller
/0/100/14/1/3               bus            USB5534B
/0/100/16                   communication  8 Series HECI #0
/0/100/16.3                 communication  8 Series HECI KT
/0/100/19        enp0s25    network        Ethernet Connection I218-LM
/0/100/1b                   multimedia     8 Series HD Audio Controller
/0/100/1c                   bridge         8 Series PCI Express Root Port 1
/0/100/1c.3                 bridge         8 Series PCI Express Root Port 4
/0/100/1c.3/0    wlo1       network        Wireless 7260
/0/100/1c.5                 bridge         8 Series PCI Express Root Port 6
/0/100/1c.5/0               generic        RTS5227 PCI Express Card Reader
/0/100/1d                   bus            8 Series USB EHCI #1
/0/100/1d/1      usb1       bus            EHCI Host Controller
/0/100/1d/1/1               bus            USB hub
/0/100/1f                   bridge         8 Series LPC Controller
/0/100/1f.2                 storage        8 Series SATA Controller 1 [AHCI mode]
/0/100/1f.3                 bus            8 Series SMBus Controller
/0/2             scsi0      storage
/0/2/0.0.0       /dev/sda   disk           180GB INTEL SSDSC2BF18
/0/2/0.0.0/1     /dev/sda1  volume         167GiB EXT4 volume
/1                          power          CM03050XL
#+END_SRC

*** What is dual channel memory?
- See [[http://www.laptopmemoryupgrades.co.uk/laptop-memory-faqs/just-what-exactly-is-dual-channel-memory][What is dual channel memory]] from Laptop Memory Upgrade.
*** How to upgrade my pc RAM?
- See [[https://www.howtogeek.com/346541/how-to-upgrade-or-replace-your-pcs-ram/][how to upgrade or replace pc RAM]] from How-To Geek.
** systemd
*** How do I reload the configuration file of a systemd unit?
- Use ~daemon-reload~ subcommand of ~systemctl~.
- ~systemctl daemon-reload~: reload the systemd manager
  configuration.
- If you want your changes in ~myservice.service~ systemd unit file
  to be reload, run the command:

#+BEGIN_SRC bash
systemctl daemon-reload
#+END_SRC

*** What is systemd?
- ~systemd~: a system and service manager for Linux operating
  systems.
*** What systemctl command is for?
- ~systemctl~: control the systemd system and service manager.
- See [[https://wiki.archlinux.org/index.php/systemd][systemd]] from Archlinux wiki.
- Common command lines using ~systemctl~:

#+BEGIN_SRC bash
systemctl list-unit-files --user
systemctl show --property MainPID --value emacs --user
systemctl status emacs --user
#+END_SRC

*** What journalctl command is for?
- ~journalctl~: Query the systemd journal.
** ps command
*** What ps command is for?
- ~ps~: report a snapshot of the current processes.
*** What does STAT column refer to in the output of ps command?
- This column indicate the process states.
- See [[https://unix.stackexchange.com/questions/18474/what-does-this-process-stat-indicates][stackexchange]].
- If I run the command ~ps -x~, the first 8 lines of the output I get
  are:

#+BEGIN_SRC text
PID TTY      STAT   TIME COMMAND
1104 ?        Ssl    0:00 PM2 v4.2.3: God Daemon (/home/tony/.pm2)
1647 ?        Ss     0:01 /lib/systemd/systemd --user
1648 ?        S      0:00 (sd-pam)
1663 ?        Ss     0:00 /usr/bin/ssh-agent -a /run/user/1000/ssh-agent.socket
1670 tty2     Ssl+   0:00 /usr/lib/gdm3/gdm-x-session --run-script i3
1672 tty2     Sl+    1:18 /usr/lib/xorg/Xorg vt2 -displayfd 3 -auth /run/user/1
1687 ?        Ss     0:00 /usr/bin/dbus-daemon --session --address=systemd: --n
1690 tty2     S+     0:01 i3
#+END_SRC

- Processes states that ps indicates are:

#+BEGIN_SRC text
D Uninterruptible sleep (usually IO)
R Running or runnable (on run queue)
S Interruptible sleep (waiting for an event to complete)
T Stopped, either by a job control signal or because it is being traced.
W paging (not valid since the 2.6.xx kernel)
X dead (should never be seen)
Z Defunct ("zombie") process, terminated but not reaped by its parent.
#+END_SRC

- and the additional characters are:

#+BEGIN_SRC text
< high-priority (not nice to other users)
N low-priority (nice to other users)
L has pages locked into memory (for real-time and custom IO)
s is a session leader
l is multi-threaded (using CLONE_THREAD, like NPTL pthreads do)
+ is in the foreground process group
#+END_SRC

*** What does TTY mean in the command ps?
- A ~TTY~ is a computer terminal. In the context of ~ps~, it is the
  terminal that executed a particular command.
- The abbreviation stands for /TeleTYpewriter/, which were devices
  that allowed users to connect to early computers.
- See [[https://stackoverflow.com/questions/7113770/what-does-tty-mean-in-the-unix-ps-command][stackoverflow]].

** socket
*** What is a socket?
- A ~Unix domain socket~ or ~IPC socket~ is a data communications
  endpoint for exchanging data between processes executing on the same
  host operating system.
- See [[https://en.wikipedia.org/wiki/Unix_domain_socket][wikipedia]] and [[https://unix.stackexchange.com/questions/243265/how-to-get-more-info-about-socket-file][stackexchange]].
*** Where is my emacs server socket?
- In the directory ~/var/run/user/1000/emacs/~.
** miscellaneous
*** What hostnamectl command is for?
- ~hostnamectl~: control the system hostname.
*** What top command is for?
- ~top~: display Linux processes.
*** How can I check the PID number of my emacs process?
- Use ~pidof~ command.
- ~pidof~: Find the process ID of a running program.
- See [[https://www.tecmint.com/find-process-name-pid-number-linux/][process name and pid (tecmint)]] and [[https://linuxize.com/post/pidof-command-in-linux/][pidof (linuxize)]].
- If you have an ~emacs~ processe and you want to check its ~PID~
  number, run the command:

#+BEGIN_SRC bash
pidof emacs
#+END_SRC

* Files
** Get info
*** How can I recursively list a directory in a tree-like format?
- Use ~tree~ command.
- ~tree~: list contents of directories in a tree-like format.
- In the root directory of an ~React~ app, limiting the max display
  depth of the directory tree to one by running the command
  ~tree -L 1 .~, I get this output:

#+BEGIN_SRC text
.
├── jsconfig.json
├── node_modules
├── package.json
├── package-lock.json
├── public
├── README.md
└── src

3 directories, 4 files
#+END_SRC

- In the root directory of an ~React~ app, limiting the max display
  depth of the directory tree to one and ignoring file in the
  ~node_modules~ directory, by running the command
  ~tree -I node_modules -L 2 .~, I get this output:

#+BEGIN_SRC text
.
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   ├── discreet-theme.css
│   ├── icon-tricks192.png
│   ├── icon-tricks512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.js
    ├── App.scss
    ├── App.test.js
    ├── astUtils.js
    ├── astUtils.test.js
    ├── index.js
    ├── _myBulma.scss
    ├── orgContent.js
    ├── serviceWorker.js
    └── setupTests.js

2 directories, 20 files
#+END_SRC

*** How can I check the space usage of a directory?
- Use ~du~ command.
- ~du~: estimate file space usage.
- If you want to check the space usage of your ~$HOME~ directory in
  a human readable way, run the command:

#+BEGIN_SRC bash
du -sh $HOME
#+END_SRC

*** How can I check the file type of a file?
- Use ~file~ command.
- ~file~: determine file type.
- If you want to check the file type of the files ~elisp.el~ and
  ~video.mp4~, that respectively contain ~emacs-lisp~ code and ~mp4~
  video, run the command:

#+BEGIN_SRC bash
file elisp.el video.mp4
#+END_SRC

- After running the previous command, I got this output:

#+BEGIN_SRC text
elisp.el:  Lisp/Scheme program, ASCII text
video.mp4: ISO Media, MP4 Base Media v1 [IS0 14496-12:2003]
#+END_SRC

*** How can I get a detailed information about audio/video files?
- Use ~mediainfo~ command.
- ~mediainfo~: command line utility to display information about
  audio/video files.
- After running the command ~mediainfo video.mp4~, I got the output:

#+BEGIN_SRC text
General
Complete name                 : video.mp4
Format                        : MPEG-4
Format profile                : Base Media
Codec ID                      : isom (isom/iso2/mp41)
File size                     : 186 KiB
Duration                      : 11 s 603 ms
Overall bit rate mode         : Constant
Overall bit rate              : 131 kb/s
Writing application           : Lavf57.83.100

Audio
ID                            : 1
Format                        : AAC
Format/Info                   : Advanced Audio Codec
Format profile                : LC
Codec ID                      : mp4a-40-2
Duration                      : 11 s 603 ms
Duration_LastFrame            : -3 ms
Bit rate mode                 : Constant
Bit rate                      : 129 kb/s
Channel(s)                    : 2 channels
Channel positions             : Front: L R
Sampling rate                 : 48.0 kHz
Frame rate                    : 46.875 FPS (1024 SPF)
Compression mode              : Lossy
Stream size                   : 183 KiB (98%)
Default                       : Yes
Alternate group               : 1
#+END_SRC

- After running the command ~mediainfo audio.mp3~, I got the output:

#+BEGIN_SRC text
General
Complete name                 : audio.mp3
Format                        : MPEG Audio
File size                     : 2.31 MiB
Duration                      : 2 min 45 s
Overall bit rate mode         : Variable
Overall bit rate              : 117 kb/s
Writing library               : Lavf57.83.100

Audio
Format                        : MPEG Audio
Format version                : Version 1
Format profile                : Layer 3
Format settings               : Joint stereo
Duration                      : 2 min 45 s
Bit rate mode                 : Variable
Bit rate                      : 117 kb/s
Channel(s)                    : 2 channels
Sampling rate                 : 48.0 kHz
Frame rate                    : 41.667 FPS (1152 SPF)
Compression mode              : Lossy
Stream size                   : 2.31 MiB (100%)
#+END_SRC

*** What option can I use to format the file time printed with -l option of ls command?
- Use ~--time-style~ option of ~ls~ command:
- ~--time-style~: with ~-l~, ~ls~ show time using style ~full-iso~,
  ~long-iso~, ~iso~, ~locale~, or ~+FORMAT~ where FORMAT is
  interpreted like in ~date~.
- If you want to list the file of a directory with the time format set
  to ~iso~, run the command:

#+BEGIN_SRC bash
ls -l --time-style=iso
#+END_SRC

- After running the previous command on one of my directory, I got
  this output:

#+BEGIN_SRC text
-rw-r--r-- 1 tony tony 22293 11-11 19:10  clojure.org
-rw-r--r-- 1 tony tony 44155 11-13 06:11  emacs.org
-rw-r--r-- 1 tony tony 15442 08-03 12:10  frontend.org
-rw-r--r-- 1 tony tony  6053 11-10 10:01  git.org
#+END_SRC
** View files
*** What cat, head and tail commands are for?
- ~cat~: concatenate files and print on the standard output.
- ~head~: output the first part of files.
- ~tail~: output the last part of files.
*** What less command is for?
- ~less~: a filter for paging through text one screenful at a time.
** Links
*** How can make a symbolic link?
- Use ~ln~ command.
- ~ln~: make links between files.
- If you want to make a link to the file ~/home/tony/videos/video.mp4~
  (/TARGET/) with the name ~video.mp4~ (/LINK_NAME/) living in the
  directory ~linked-video~, run the commands:

#+BEGIN_SRC bash
cd linked-video
ln -s /absolute-path-to/video.mp4 video.mp4
#+END_SRC

- If the ~linked-video~ was empty before making the link above and if
  you run the command ~ls -l~ in the directory ~linked-video~ you
  should obtain something like this:

#+BEGIN_SRC text
lrwxrwxrwx  1 tony tony 37 Jul 24 08:24 video.mp4 -> /home/tony/videos/video.mp4
#+END_SRC

*** How can I get the path (target) of a symbolic link?
- Use ~readlink~ command.
- ~readlink~: print resolved symbolic links or canonical file names.
- If you want to get the path (target) of the current ~python~,
  run the command:

#+BEGIN_SRC bash
readlink $(which python)
#+END_SRC

*** How can I manage symbolic links of whole directory tree?
- Use ~stow~ command.
- ~stow~: software package installation manager.
- If you want to link all your /dotfiles/ files in your ~$HOME~
  directory to a versioned directory ~dotfiles~, assuming
  ~dotfiles~ directory is a subdirectory of ~~/some-directory~, run
  the commands:

  #+BEGIN_SRC bash
  cd ~/some-directory
  stow -t $HOME dotfiles
  #+END_SRC

- If you want to unlink the ~stow~ links made in the previous
  section, run the commands:

  #+BEGIN_SRC bash
  cd ~/some-directory
  stow -D -t $HOME dotfiles
  #+END_SRC

** Compression
*** How can I (archive) store multiple files in a single file?
- Use ~tar~ command.
- ~tar~: an archive utility.
- If you want to store all files frome the directory ~/etc~ into the
  archive file ~etc.tar~ verbosely listing the files being archived,
  run the command:

#+BEGIN_SRC bash
tar -cfv etc.tar /etc
#+END_SRC
*** How can I extract all files from a tar archive?
- Use ~tar~ command.
- ~tar~: an archive utility.
- If you want extract all files from the archive ~archive.tar~, run
  the command:

#+BEGIN_SRC bash
tar -xf archive.tar
#+END_SRC
*** What is the difference between zip and gzip?
- See [[http://www.differencebetween.net/technology/difference-between-zip-and-gzip/][difference between zip and gzip]] from differencebetween.net.
- ~gzip~ can achieve better compression compared to ~zip~.
- ~zip~ is capable of /archiving/ and /compressing/ multiple files, while
  ~gzip~ is only capable of compression.
- You can easily /extract/ individual files from a large ~zip~ file,
  but not from a ~gzip~ tarball.
** Search
*** What is fzf?
- fzf is a general-purpose command-line fuzzy finder.
- See [[https://github.com/junegunn/fzf][fzf]] repository and this [[https://www.youtube.com/watch?v=qgG5Jhi_Els][video on fzf]].
*** How to update linux locate cache?
- Use ~updatedb~ command.
- ~updatedb~: Update a database for ~mlocate~.
- See [[https://unix.stackexchange.com/questions/124757/how-to-update-linux-locate-cache][stackexchange]].
- If you want to update the database use by ~locate~ command, run the
  command:

#+BEGIN_SRC bash
sudo updatedb
#+END_SRC

*** What locate command is for?
- ~locate~: find files by name.
*** What grep command is for?
- ~grep~: Search for pattern in files.
- If you want to search the sequence ~hello world~ in the files
  ~menu.h~ and ~main.c~ ignoring the case, run the command:

#+BEGIN_SRC bash
grep -i 'hello world' menu.h main.c
#+END_SRC
*** How to ignore binary files when searching with grep?
- Use ~-I~ option of ~grep~ command.
- ~-I~: Process a binary file as if it did not  contain  matching
  data.
- See [[https://stackoverflow.com/questions/25853722/how-to-suppress-binary-file-matching-results-in-grep][stackoverflow]].
- If you want to search the sequence ~hello world~ in the files in
  your current directory ignoring the binary files, run the command:

#+BEGIN_SRC bash
grep -I 'hello world' *
#+END_SRC
*** How to find files that match string or regexp?
- Use ~find~ command.
- ~find~: search for files in a directory hierarchy.
- See [[https://alvinalexander.com/unix/edu/examples/find.shtml][example of command find]] by Alvin Alexander.
- If you want to find files recursively from your ~$HOME~
  directory where the ~name~ match the global patern ~virtualenv*~,
  run the command:

#+BEGIN_SRC bash
find ~/ -name "virtualenv*"
#+END_SRC

*** What is recoll?
- ~recoll~ is a desktop full-text search tool.
- See [[https://www.lesbonscomptes.com/recoll/][recoll]] homepage, [[https://www.lesbonscomptes.com/recoll/usermanual/usermanual.html][recoll]] usermanual and [[https://oremacs.com/2015/07/27/counsel-recoll/][counsel-recoll]] if you
  want use it with emacs.
- To install ~recoll~, run the command:

#+BEGIN_SRC bash
sudo apt install recoll
#+END_SRC

- ~~/.recoll/~ is the default config directory.
- ~~/.recoll/recoll.conf~ is the ~recoll~ main configuration file.
- ~~/.recoll/xapiandb/~ is the default directory for the index data.
- To use it, you first have to index the ~xiapan~ database with ~recollindex~.
- To index the ~xiapan~ database of ~recoll~ according to the
  the config file ~~/.recoll/recoll.conf~, run the command:

#+BEGIN_SRC bash
recollindex
#+END_SRC

** Replace string
*** How to replace string in multiple files?
- Use commands ~sed~, ~perl~ and ~find~.
- ~sed~: stream editor for filtering and transforming text.
- ~perl~: the Perl 5 language interpreter.
- ~find~: search for files in a directory hierarchy.
- See [[https://unix.stackexchange.com/questions/112023/how-can-i-replace-a-string-in-a-files][replace string]] on stackoverflow.
- If you want to replace all occurrences of one string with another
  in all files in the current directory (Non recursive, files in
  this directory only.), run the command:

#+BEGIN_SRC bash
sed -i -- 's/foo/bar/g' *
#+END_SRC

- If you want to replace all occurrences of one string with another
  in all files in the current directory (Recursive, regular files
  (including hidden ones) in this and all subdirectories), run the
  command:

#+BEGIN_SRC bash
find . -type f -exec sed -i 's/foo/bar/g' {} +
#+END_SRC

- If you want to replace only if the file name matches another
  string (Non-recursive, files in this directory only), run the
  command:

#+BEGIN_SRC bash
sed -i -- 's/foo/bar/g' *baz*    # all files whose name contains baz
#+END_SRC

- If you want to replace only if the file name matches another string
  / has a specific extension / is of a certain type etc
  (Non-recursive, files in this directory only), run the command:

#+BEGIN_SRC bash
find . -type f -name "*baz*" -exec sed -i 's/foo/bar/g' {} +
# all files whose name contains baz
#+END_SRC

** fd command
*** With fd, how to find all files except hidden files and directories?
- It's the default behaviour of ~fd~ command.
- ~fd~: find entries in the filesystem.
- See [[https://github.com/sharkdp/fd][fd]] repository.
- If you want to find all files except hidden files and directories,
  run the command:

#+BEGIN_SRC bash
fd
#+END_SRC

- Note that if you are in ~git~ directory, the search ignores the
  files ignored by ~.gitignore~ file.

*** With fd, how to include all hidden files in the search?
- Use the option ~--hidden~ of ~fd~ command.
- ~fd~: find entries in the filesystem.
- See [[https://github.com/sharkdp/fd][fd]] repository.
- If you want to include all hidden files in your ~fd~ search, run the
  command:

#+BEGIN_SRC bash
fd --hidden
#+END_SRC

- Note that if you are in a ~git~ directory, this shows all files in
  the directory ~.git/~ but skip the files ignored by ~.gitignore~
  file.

- If you want to include all hidden files in your ~fd~ search but
  exclude files in the ~.git/~ directory, run the command:

#+BEGIN_SRC bash
fd --hidden --exclude '.git/*'
#+END_SRC

*** With fd, how to find every file entries?
- Use ~--hidden~ and ~--no-ignore~ option of ~fd~ command.
- ~fd~: find entries in the filesystem.
- See [[https://github.com/sharkdp/fd][fd]] repository.
- If you want to include every file entries in your ~fd~ search, run
  the command:

#+BEGIN_SRC bash
fd --hidden --no-ignore
#+END_SRC

*** With fd, how to restrict the search to the directories?
- Use ~--type~ option of ~fd~ command.
- ~fd~: find entries in the filesystem.
- See [[https://github.com/sharkdp/fd][fd]] repository.
- If you want to restrict your ~fd~ search to the directories, run the
  command:

#+BEGIN_SRC bash
fd --type d
#+END_SRC

*** With fd, how to restrict the search to the file only?
- Use ~--type~ option of ~fd~ command.
- ~fd~: find entries in the filesystem.
- See [[https://github.com/sharkdp/fd][fd]] repository.
- If you want to restrict your ~fd~ search to the files only, run the
  command:

#+BEGIN_SRC bash
fd --type f
#+END_SRC

** Directories
*** How can I list the directories first when using ls?
- Use ~--group-directories-first~ flag of ~ls~ command.
- ~ls~: list directory contents.
- If you want to list the directories first when using ~ls~, run the
  command:

#+BEGIN_SRC bash
ls --group-directories-first
#+END_SRC

*** How can I create a directory with its parents?
- Use ~mkdir~ command.
- ~mkdir~: make directories.
- If you want to create this nested directories ~dir-1/dir-2/dir-3~ from
  the directory you are in, run the command:

#+BEGIN_SRC bash
mkdir -p dir-1/dir-2/dir-3
#+END_SRC

*** How can I go back to the last directory I was in?
- Use ~cd~ command.
- ~cd~: change the shell working directory.
- I you want to go back to the last directory you were in, run the
  command:

#+BEGIN_SRC bash
cd -
#+END_SRC

** Watch files
*** How can I automatically run test when some files change on disk?
- Use ~watchman-make~ command that come with ~watchman~.
- ~watchman-make~ : waits for changes to files and then invokes a
  build tool (by default, ~make~) or provided script to process those
  changes.
- See [[https://facebook.github.io/watchman/][watchman]] documentation and  [[https://facebook.github.io/watchman/docs/install][watchman]] install documentation.
- If you want to run ~pytest~ on a python project each time the
  subdirectories ~./src~ and ~./tests/~ change on your disk, in
  the root of your project, run the command:

#+BEGIN_SRC bash
watchman-make -p 'src/**' 'tests/**' -r 'pytest'
#+END_SRC

- To install ~watchman-make~ which is part of the package ~watchman~,
  use the package manager ~homebrew~ and run the command:

#+BEGIN_SRC bash
brew install watchman
#+END_SRC

*** How can I whatch a file and trigger a command when it was opened?
- Use ~inotifywait~ command.
- ~inotifywait~: wait for changes to files using inotify.
- If you want to print ~hello world~ in the ~stdout~ after the file
  ~path/to/watched-file~ was opened, run the command:

#+BEGIN_SRC bash
inotifywait -qq -e open path/to/watched-file && echo "hello world"
#+END_SRC

** Redirection
*** What does 2>&1 mean in a command line?
- Redirect the standard error ~stderr~ (the file descriptor 2) to
  the standard output ~stdout~ (the file descriptor 1). You can
  consider ~>&~ as a redirect merger operator.
- See [[https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean][stackoverflow]].
- So if you have a command line ~my-command~ that send error to
  ~stderr~ and you want to catch the errors on ~stdout~, run this
  command:

#+BEGIN_SRC bash
my-command 2>&1
#+END_SRC
* Network
** DNS
*** How to get information of an url ?
- Use the command ~dig~.
- ~dig~: a DNS lookup utility.
- See [[https://support.dnsimple.com/articles/a-record/][A record]] from dnsimple.com.
- If you want to get the *A record* of ~youtube.com~, run the command:

#+BEGIN_SRC bash
dig A youtube.com
#+END_SRC

** Host
*** How can I know my IP address?
- Use ~ifconfig~ command.
- ~ifconfig~: configure a network interface.
- If you want to know your (local) IP address (use over the LAN), run
  the command:

#+BEGIN_SRC bash
ifconfig -a | grep -E 'inet '  # this is the local IP address
#+END_SRC

- If you want to know your (public) IP address (use over internet),
  follow the link  [[https://ifconfig.co/ip][ifconfig.co]] or run the command:

#+BEGIN_SRC bash
curl ifconfig.co/ip
#+END_SRC

** SSH
*** How can I enable SSH server on ubuntu?
- Use ~openssh-server~ package.
- ~openssh-server~: Secure shell (SSH) server, for secure access from
  remote machines.
- See [[https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-18-04/][enable ssh on ubuntu]] by linuxize.
- If you want to enable SSH server on the standard port 22, you
  have to /start/ ~ssh~ service with ~systemctl~ command and
  /allow/ incomming SSH connection by /opening/ (allowing) the
  port 22 with the command ~ufw~ and /enabling/ the connection
  with the command ~ufw~. To do so, run the commands:

#+BEGIN_SRC bash
sudo systemctl start ssh
sudo ufw allow ssh  # or sudo ufw allow 22/tcp
sudo ufw enable
#+END_SRC

- If you want to install ~openssh-server~ and /start/ the service
  ~ssh~, run the command:

#+BEGIN_SRC bash
sudo apt install openssh-server
#+END_SRC

*** How can I connect to my server via SSH?
- Use ~ssh~ command.
- ~ssh~: OpenSSH SSH client (remote login program).
- See [[https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-18-04/][enable ssh on ubuntu]] by linuxize.
- If you want to connect to your Ubuntu machine over LAN with
  ~bob~ as username and ~192.168.1.100~ IP, run the command:

#+BEGIN_SRC bash
ssh bob@192.168.1.100
#+END_SRC

- If you want to connect to your Ubuntu machine over Internet with
  ~bob~ as username and ~2a01:c50e:e911:9600:fc4d:b07d:d36f:6358~ IP,
  run the command:

#+BEGIN_SRC bash
ssh bob@2a01:c50e:e911:9600:fc4d:b07d:d36f:6358
#+END_SRC

*** How can I know that my shell is connected via a SSH connection?
- Use ~printenv~ command.
- ~printenv~: print all or part of environment.
- If you want to know if you're connected via SSH, check if the
  environment variables ~SSH_CONNECTION~, ~SSH_CLIENT~ and
  ~SSH_TTY~ are defined. To do so, run the command:

#+BEGIN_SRC bash
printenv | grep SSH
#+END_SRC

*** How can I exit a SSH connection?
- Use ~exit~ command.
- ~exit~: cause normal process termination.
- If you want to exit a SSH connection, you can either type ~C-d~
  or run the command:

#+BEGIN_SRC bash
exit
#+END_SRC

*** How can I mount remote directories over ssh?
- Use ~sshfs~ command.
- ~sshfs~: filesystem client based on ssh.
- See [[https://linuxize.com/post/how-to-use-sshfs-to-mount-remote-directories-over-ssh/][sshfs]] by linuxize.
- If you want to mount the home directory of a user named ~tony~
  on a remote host with IP address of ~192.168.1.100~, create a
  directory ~~/remote-tony~ that will serve as a mount point and
  use ~sshfs~ command. To do so, run the commands:

#+BEGIN_SRC bash
mkdir ~/remote-tony
sshfs tony@192.168.1.100:/home/tony ~/remote-tony
#+END_SRC

- If you want to detach the mounted file system ~~/remote-tony~,
  run the command:

#+BEGIN_SRC bash
sudo umount ~/remote-tony
#+END_SRC

*** How can I setup a passwordless SSH login?
- Use ~ssh-keygen~, ~ssh-add~ and ~ssh-copy-id~ command.
- ~ssh-keygen~: Authentication key generation, management and
  conversion.
- ~ssh-add~: Adds private key identities to the authentication agent.
- ~ssh-copy-id~: Use locally available keys to authorise logins on a
  remote machine.
- See examples [[https://linuxize.com/post/how-to-setup-passwordless-ssh-login/][setup passwordless ssh login]] and [[https://gist.github.com/jexchan/2351996][create different public key]].
- If you want to connect to the user ~jim~ on the server
  ~192.168.1.100~ without prompting a password, you have to
  generate a /ssh key/, send the public part to
  ~jim@192.168.1.100~ server, append the public key on the remote
  file ~~/.ssh/authorized_keys~ and add the private key to the
  authentication agent. After that, you can directly connect to
  the server. To do so, run the command:

#+BEGIN_SRC bash
ssh-keygen -t rsa -f ~/.ssh/id_rsa_jim
ssh-copy-id -i ~/.ssh/id_rsa_jim.pub jim@192.168.1.100
ssh-add ~/.ssh/id_rsa_jim
#+END_SRC

- If you want to list all identities currently represented by the
  agent, run the command:

#+BEGIN_SRC bash
ssh-add -l
#+END_SRC

- If you want to delete the identity ~~/.ssh/id_rsa_jim~ from the
  agent, run the command:

#+BEGIN_SRC bash
ssh-add -d ~/.ssh/id_rsa_jim
#+END_SRC

*** How can I solve the problem that give the error: "Error connecting to agent: No such file or directory"?
- Use ~eval~ command.
- ~eval~: execute arguments as a shell command.
- See [[https://unix.stackexchange.com/questions/48863/ssh-add-complains-could-not-open-a-connection-to-your-authentication-agent/48868][open a connection to your authentication agent]] on stackexchange.
- If you want to open a connection to your authentication agent
  that is already running, run the command:

#+BEGIN_SRC bash
eval "$(ssh-agent)"
#+END_SRC

*** How can I start my authentication agent ssh-agent?
- Use ~ssh-agent~, ~eval~ and ~ssh-add~ commands.
- ~ssh-agent~: hold private keys used for public key authentication.
- ~eval~: execute arguments as a shell command.
- ~ssh-add~: adds private key identities to the authentication agent.
- If you want to start your authentication agent, open a
  connection to the agent and add the key ~id_rsa_some_key~ to
  the agent. To do so, run the commands:

#+BEGIN_SRC bash
ssh-agent
eval "$(ssh-agent)"
ssh-add ~/.ssh/id_rsa_some_key
#+END_SRC

- If you want to list the identities represented by the
  authentication agent, run the command:

#+BEGIN_SRC bash
ssh-add -l
#+END_SRC

- If you want to Kill the current agent (given by the
  ~SSH_AGENT_PID~ environment variable), run the command:

#+BEGIN_SRC bash
ssh-agent -k
#+END_SRC

*** How to get ssh private key automatically added to the authentication agent?
- Use the keywords ~AddKeysToAgent~ and ~IdentityFile~ in the
  ~~/.ssh/config~ user's configuration file.
- ~AddKeysToAgent~: specifies whether keys should be automatically
  added to a running ssh-agent(1).
- ~IdentityFile~: specifies a file from which the user's RSA
  authentication identity is read.
- See ~man~ documentation ~ssh_config~.
- If you want to get ssh private keys ~~/.ssh/id_rsa_key_1~ and
  ~~/.ssh/id_rsa_key_2~ automatically added to the authentication
  agent, you have to add these following lines to the file
  ~~/.ssh/config~:

#+BEGIN_SRC bash
Host *
    AddKeysToAgent yes
    IdentityFile ~/.ssh/id_rsa_key_1
    IdentityFile ~/.ssh/id_rsa_key_2
#+END_SRC

*** How can I start ssh-agent on login?
- Use ~systemd~ by adding a user systemd unit for ~ssh-agent~.
- See [[https://stackoverflow.com/questions/18880024/start-ssh-agent-on-login][start-ssh-agent-on-login]] on stackoverflow.
- If you want to start ~ssh-agent~ on login, you have to add a
  ~ssh-agent.service~ user systemd unit, export ~SSH_AUTH_SOCK~
  environment in the ~.bashrc~ file, ~enable~ and ~start~ the
  ~ssh-agent~ unit, and specify (in the file ~~/.ssh/config~) that
  keys should be automatically added to a running ~ssh-agent~.

1) file ~~/.config/systemd/user/ssh-agent.service~:

#+BEGIN_SRC bash
[Unit]
Description=SSH key agent

[Service]
Type=forking
Environment=SSH_AUTH_SOCK=%t/ssh-agent.socket
ExecStart=/usr/bin/ssh-agent -a $SSH_AUTH_SOCK

[Install]
WantedBy=default.target
#+END_SRC

2) file ~.bashrc~:

#+BEGIN_SRC bash
export SSH_AUTH_SOCK="$XDG_RUNTIME_DIR/ssh-agent.socket"
#+END_SRC

3) in a terminal, run the commands:

#+BEGIN_SRC bash
systemctl --user enable ssh-agent
systemctl --user start ssh-agent
#+END_SRC

4) file ~~./ssh/config~, if you have two private keys:

#+BEGIN_SRC bash
Host *
     AddKeysToAgent yes
     IdentityFile ~/.ssh/id_rsa_key_1
     IdentityFile ~/.ssh/id_rsa_key_2
#+END_SRC

- Note that after login, before the first use of ~ssh~ (via
  ~ssh~, ~git~, ...), your ~ssh-agent~ doesn't know about your keys,
  so ~ssh-add -l~ lists anything.
** Servers
*** How to run a php server?
- Use ~php~ command.
- ~php~: PHP Command Line Interface.
- If the directory contains a ~index.php~ file, to have the server
  running on ~localhost~ on port ~8080~, run the command:

#+BEGIN_SRC bash
  php -S localhost:8080
#+END_SRC

*** How to run a server that automatically reload when files change on the system?
- Use the command ~browser-sync~.
- See [[https://www.browsersync.io/][browsersync]] homepage.
- If the directory contains an ~index.html~ file, to have the server
  reload each second, run the command:

#+BEGIN_SRC bash
browser-sync start --reload-delay=1000 -w --server
#+END_SRC

- If the browser tab doesn't refresh automatically when you modify files,
  then you have to add a snippet into your website, just before the
  closing ~</body>~ tag. If you run ~browser-sync start~ command
  line, this prints the snippet you have to add to your ~index.html~
  file. When I did, this gave me that snippet:

#+BEGIN_SRC html
<script id="__bs_script__">//<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.13'><\/script>".replace("HOST", location.hostname));
//]]></script>
#+END_SRC

- If you want to install ~browser-sync~, run the command:

#+BEGIN_SRC bash
npm install -g browser-sync
#+END_SRC

*** How can I rewrite apache rules?
- Use ~RewriteCond~ and ~RewriteRule~ directives.
- See module [[https://httpd.apache.org/docs/trunk/fr/rewrite/intro.html][mod_rewrite]] from Apache documentation.
*** How can I configure OVH config file on server?
- Modify the ~.ovhconfig~ file.
- See [[https://docs.ovh.com/fr/hosting/configurer-fichier-ovhconfig/][.ovhconfig file]] from OVH documentation.
*** Where can I find good nginx resources?
- [[https://linuxize.com/post/how-to-install-nginx-on-ubuntu-18-04/][install nginx]], [[https://linuxize.com/post/nginx-reverse-proxy/][nginx reverse proxy]], [[https://linuxize.com/post/how-to-set-up-nginx-server-blocks-on-ubuntu-18-04/][nginx server block]], [[https://linuxize.com/post/secure-nginx-with-let-s-encrypt-on-ubuntu-18-04/][nginx ssl]] by
  linuxize.
- [[https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/][reverse proxy]], [[https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/][nginx config pitfalls]], [[https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/][nginx serving statict content]],
  [[https://docs.nginx.com/nginx/admin-guide/security-controls/securing-http-traffic-upstream/][ssl nginx / upstream server]] from nginx.com.
- [[https://www.nginx.com/blog/creating-nginx-rewrite-rules/][nginx rewrite rules]] from nginx.com that shows really good examples
  to understand what are ~$uri~, ~$request_uri~, ~try_files~,
  ~return~, ~rewrite~.
- [[https://scaron.info/blog/improve-your-nginx-ssl-configuration.html][improve your nginx ssl]] from scaron.info.
*** What does request URI refer to in nginx vocabulary?
- The *request URI* is the part of the request that comes after the domain name or IP address/port.
*** How can I install nginx on ubuntu?
- Use ~apt~ and ~ufw~ command.
- ~apt~: high-level commandline interface for the package management
  system.
- ~ufw~: program for managing a netfilter firewall.
- See [[https://linuxize.com/post/how-to-install-nginx-on-ubuntu-18-04/][install nginx]] by linuxize.
- If you want to install nginx on ubuntu and get ready to use,
  update your packages with ~apt update~, install it with ~apt
  install~ and open the ~ports~ used by nginx:

#+BEGIN_SRC bash
sudo apt update
sudo apt install nginx
sudo ufw allow 'Nginx Full'
sudo ufw enable
#+END_SRC

- If you want to check if ~nginx~ is running, run the command:

#+BEGIN_SRC bash
sudo systemctl status nginx
#+END_SRC

- Each time you modify your ~nginx~ configuration, you have to
  ~reload~ ~nginx~. To do so, run the command:

#+BEGIN_SRC bash
sudo systemctl reload nginx
#+END_SRC

*** What is the default configuration of nginx after installing it?
- See [[https://linuxize.com/post/how-to-install-nginx-on-ubuntu-18-04/][install nginx]] by linuxize.
- By default, ~nginx~ serves the file ~index.nginx-debian.html~ on
  ~localhost~ (~127.0.0.1~) on ~port 80~. Just after intalling
  ~nginx~, before any modification, you can visit the address
  ~http://127.0.0.1~ on your browser.
- This happens because ~nginx~ looks at config files on the directory
  ~/etc/nginx/sites-enabled~. It sees the file
  ~/etc/nginx/sites-enabled/default~ that is a symlink of the file
  ~/etc/nginx/sites-available/default~. This default file tells
  ~nginx~ to serve the file ~index.nginx-debian.html~ that is in
  the directory ~/var/www/html~. And the config file [[../linux/etc--nginx--sites-available--default.txt][default]],
  after flushing the commented lines, is as follow:

#+BEGIN_SRC bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/html;
  index index.html index.htm index.nginx-debian.html;
  server_name _;

  location / {
          # First attempt to serve request as file, then
          # as directory, then fall back to displaying a 404.
          try_files $uri $uri/ =404;
  }
}
#+END_SRC

*** How can I set nginx to be a reverse proxy?
- Use ~proxy_pass~ directive in your ~nginx block~ configuration.
- To pass a request to an HTTP proxied server, the ~proxy_pass~
  directive is specified inside a ~location~.
- See [[https://linuxize.com/post/nginx-reverse-proxy/][nginx reverse proxy]] by linuxize, [[https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/][reverse proxy]] from nginx.com
  and [[http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass][proxy_pass]] from nginx.org documentation.
- If you want to serve at ~mydomain.com~ an application that is running as a http
  server (node app, flask app,...) on ~http://127.0.0.1:5000~,
  your ~nginx block~ for ~mydomain.com~ defined in the file
  ~/etc/nginx/sites-available/mydomain.conf~ must contain the
  following lines:

#+BEGIN_SRC bash
server {
  listen 80;
  server_name www.mydomain.com mydomain.com;

  location / {
  proxy_pass http://127.0.0.1:5000;
  }
}
#+END_SRC

*** How can I fix the nginx error "error (nginx): cannot get /app" related to proxy servers?
- See ~proxy_pass~ directive in your ~block~ configuration.
- The error was that I was trying to pass ~location /app~ to
  the address ~http://127.0.0.1:5000~ without putting a ~/~ a the
  end of the address.
-To solve the problem, I add a ~/~ to the ~proxy_pass~ address. My
~block~ configuration ~/etc/nginx/sites-available/mydomain.conf~
contains know the following lines:

#+BEGIN_SRC bash
location /app {
  proxy_pass http://127.0.0.1:5000/;
}
#+END_SRC

** Connection
*** How can I restart my wifi connection?
- Use ~service~ command.
- ~service~: run a System V init script.
- See [[https://askubuntu.com/questions/271387/how-to-restart-wifi-connection][restart wifi connection]] on askubuntu.
- If you want to restart your wifi connection, run the command:

#+BEGIN_SRC bash
sudo service network-manager restart
#+END_SRC

*** How can I check if I'm connected to a wireless network?
- Use ~iwgetid~ command.
- ~iwgetid~: report ESSID, NWID or AP/Cell Address of wireless network.
- If you want to check if you are connected to a wireless
  newtork, run the following command and if you get nothing, you are
  not connected:

#+BEGIN_SRC bash
iwgetid
#+END_SRC

** ftp
*** Why do I get kicked out of a FTP session once I run a command?
- Use ~ufw~ command.
- ~ufw~: program for managing a netfilter firewall.
- See [[https://unix.stackexchange.com/questions/90487/why-do-i-get-kicked-out-of-a-ftp-session-once-i-run-a-command/90501][ftp error due to firewall]] on stackexchange.
- If you want to open all the port to not have problem of
  firewall with ~ftp~, run the command:

#+BEGIN_SRC bash
sudo ufw disable
#+END_SRC

*** What ftp command is for?
- ~ftp~ is an internet file transfer program.
** Miscellaneous
*** What curl command is for?
- ~curl~: transfer a URL.
*** What wget command is for?
- ~wget~: the non-interactive network downloader.
*** What ping command is for?
- ~ping~: send ICMP ECHO_REQUEST to network hosts.
* Devices
** USB drive
*** How can I securely clear (wipe out) all the data on my USB drive?
- Use ~dd~ command.
- ~dd~: convert and copy a file.
- See [[https://linuxize.com/post/how-to-format-usb-sd-card-linux/][format usb drives]] by linuxize.
- If you want to /wipe out/ all the data on your USB drive, plug
  it, be sure that is not mounted, and assuming that your target drive
  is ~/dev/sdb~, run the command:

#+BEGIN_SRC bash
sudo dd if=/dev/zero of=/dev/sdb bs=4096 status=progress
#+END_SRC

- Last time, for a 32GB usb drive, the process took about 30
  minutes to complete.
- Once the disk is erased, the ~dd~ command will print ~~No space
  left on device~.
*** How can I format a usb drive with EXT4?
- Use ~parted~ and ~mkfs.ext4~ commands.
- ~parted~: a partition manipulation program.
- ~mkfs.ext4~: create an ext4 filesystem.
- See [[https://linuxize.com/post/how-to-format-usb-sd-card-linux/][format usb drives]] by linuxize.
- If you want to format an usb drive with only one ext4 partition
  that take the whole space, plug you're usb drive, be sure that
  is not mounted, create a GPT partition table, create a ext4
  partition that takes the whole space and finaly format the
  partition to ext4. To do so, assuming that your target drive
  is ~/dev/sdb~, run the commands:

#+BEGIN_SRC bash
sudo parted /dev/sdb --script -- mklabel gpt
sudo parted /dev/sdb --script -- mkpart primary ext4 0% 100%
sudo mkfs.ext4 -F /dev/sdb1
#+END_SRC

- When the usb drive is formated as above, when the usb is mounted it is
  own by ~root~, belong to ~root~ group and as the permission file is
  ~drwxr-xr-x~.
- If you want to print the partition table and verify that
  everything is set up correctly, run the command:

#+BEGIN_SRC bash
sudo parted /dev/sdb --script print
#+END_SRC

*** How can I name a USB drive with an ext4 filesystem?
- Use ~e2label~ command.
- ~e2label~: change the label on an ext2/ext3/ext4 filesystem.
- See [[https://help.ubuntu.com/community/RenameUSBDrive][rename usb drive]] from help.ubuntu.com.
- If you want to name (or rename) ~my-name~ your USB drive,
  assuming the target drive is ~/dev/sdb1~ and is unmounted, run
  the command:

#+BEGIN_SRC bash
sudo e2label /dev/sdb1 my-name
#+END_SRC

- I you want to check the name of your USB drive, assuming the
  target is ~/dev/sdb1~, run the command:

#+BEGIN_SRC bash
sudo e2label /dev/sdb1
#+END_SRC

- The name of an usb drive doesn't identify the usb drive. For
  this purpose see ~UUID~ of the usb drive or the ~PARTUUID~.
*** How can I know the UUID of an USB drive?
- Use ~blkid~ command.
- ~blkid~: locate/print block device attributes.
- See [[https://wiki.archlinux.org/index.php/Persistent_block_device_naming][persistent block device naming]] from archlinux wiki.
- If you want to print the ~UUID~ of the block device wich
  partition is ~/dev/sdb1~, run the command:

#+BEGIN_SRC bash
blkid -s UUID -o value /dev/sdb1
#+END_SRC

- Filesystem partitions have UUIDs but physical devices do not.
*** How can I set up the USB drive in such way that user with the same UID accross linux system can access to the USB drive?
- Use ~mkfs.ext4~ and ~chown~ commands.
- ~mkfs.ext4~: create an ext4 filesystem.
- ~chown~: change file owner and group.
- See  [[https://unix.stackexchange.com/questions/422656/how-to-make-an-ext4-formatted-usb-drive-with-full-rw-permissions-for-any-linux-m][ext4 formatted usb drive]] on stackexchange.
- If you want to format your usb drive to ext4 file system and
  give it the ownership of the same username (same UID) you
  share accross linux system, assuming that ~/dev/sdb1~ is the
  partition and ~my-name~ is your username, run the commands:

#+BEGIN_SRC bash
sudo mkfs.ext4 /dev/sdb1
sudo mount /dev/sdb1 /mnt
sudo chown my-name: /mnt
sudo umount /mnt
#+END_SRC

- Take care, the above operations will kill your all the data on
  the usb drive.
*** How can I preserve mode/ownership/timestamps when using cp or rsync with sudo?
- ~cp~: copy files and directories.
- ~rsync~: a fast, versatile, remote (and local) file-copying tool.
- If you want to copy the directory ~my-dir~ to your USB drive
  mounted at ~/mnt~ and preserving mode/ownership/timestamps, run
  the command:

#+BEGIN_SRC bash
sudo cp -r --preserve my-dir /mnt  # with cp
sudo rsync -rog my-dir /mnt  # with rsync
#+END_SRC

*** How can I mount a usb drive without sudo privilege?
- Use ~pmount~ command.
- ~pmount~: mount arbitrary hotpluggable devices as normal user.
- If you want to /mount/ your USB drive on ~/media/usbdrive~
  assuming the target drive is ~/dev/sdb1~, run the command:

#+BEGIN_SRC bash
pmount /dev/sdb1 usbdrive
#+END_SRC

- If you want to /unmount/ your USB drive mounted with ~pmount~
  assuming the target drive is ~/dev/sdb1~, run the command:

#+BEGIN_SRC bash
pumount /dev/sdb1
#+END_SRC

*** How can I mount a usb drive?
- Use ~mount~ command.
- ~mount~: mount a filesystem.
- If you want to /mount/ your USB drive on ~/mnt~
  assuming the target drive is ~/dev/sdb1~, run the command:

#+BEGIN_SRC bash
sudo /dev/sdb1 /mnt
#+END_SRC

- If you want to /unmount/ your USB drive, assuming the target drive
  is ~/dev/sdb1~, run the command:

#+BEGIN_SRC bash
sudo umount /dev/sdb1
#+END_SRC

*** How can I list block USB devices?
- Use ~lsblk~ command.
- ~lsblk~: list block devices.
- If you want to the block USB devices on your machine, run the
  command:

#+BEGIN_SRC bash
lsblk
#+END_SRC

*** How can I list USB devices?
- Use ~lsusb~ command.
- ~lsusb~: list USB devices.
- If you want to the USB devices on your machine, run the
  command:

#+BEGIN_SRC bash
lsusb
#+END_SRC

*** How can I know what is the available space on a USB drive?
- Use ~df~ command.
- ~df~: report file system disk space usage.
- If you want to know the available space that remains on a USB
  drive, assuming the target drive is ~/dev/sdb1~ and is mounted,
  run the command:

#+BEGIN_SRC bash
df -h /dev/sdb1
#+END_SRC

*** Why the file system of my usb drive suddenly becomes read-only?
- See [[https://superuser.com/questions/1125282/what-can-i-do-if-my-usb-flash-drive-is-write-protected-or-read-only][usb drive write protected or read only]] on stackexchange.
- This is probably because the drive has probably experienced a
  fault condition. That is your usb drive is not safe. So you must
  backup your data and change your usb drive.
** Iphone
*** How can I mount my Iphone on my linux machine?
- Use ~idevicepair~ and ~ifuse~ command.
- ~idevicepair~: manage host pairings with devices and usbmuxd.
- ~ifuse~: mount directories of an iOS device locally using fuse.
- See [[https://www.maketecheasier.com/easily-mount-your-iphone-as-an-external-drive-in-ubuntu/][mount your iphone as an external drive]] from maketecheasier.
- If you want to mount your Iphone on the directory
  ~/media/iphone~ in order browse its directories contents, you
  have to plug your Iphone to your machine, pair it, create the
  directory ~/media/iphone~ (if doesn't exist yet) and mount the
  Iphone. To do so, run the commands:

#+BEGIN_SRC bash
idevicepair pair
mkdir /media/iphone
sudo ifuse /media/iphone
#+END_SRC

- If you want to list the medias on your mobile (in my case there were
  on the directory ~/media/iphone/DCIM/106APPLE~), run the
  command:

#+BEGIN_SRC bash
ls ~/media/iphone/DCIM/106APPLE
#+END_SRC

- If you want to unmount your Iphone, run the command:

#+BEGIN_SRC bash
sudo umount media/iphone
#+END_SRC

- If you want to install ~idevicepair~ and ~ifuse~, run the
  command:

#+BEGIN_SRC bash
sudo apt install libimobiledevice6 libimobiledevice-utils ifuse
#+END_SRC

* X window system
** Get X information
*** How can I print all X information on a selected window?
- Use ~xwininfo~ command.
- ~xwininfo~: window information utility for X.
- If you want to to print all X information on a selected window,
  run the command ~xwininfo -all~ and click on the window you want
  the information from:

#+BEGIN_SRC bash
xwininfo -all  # and click on the window you want the information from
#+END_SRC

** X and i3
*** How can I kill a window that I can't kill with i3?
- Use ~xkill~ command.
- ~xkill~: kill a client by its X resource.
- If you want to kill a window that doesn't respond, run the
  command ~xkill~ and click on the window you want to kill:

#+BEGIN_SRC bash
xkill  # and click on the window you want to kill
#+END_SRC

*** How can I get the instance and class of X window that are used with i3?
- Use ~xprop~ command.
- ~xprop~: property displayer for X.
- If you want to get the instance and class of an X window in
  order to use them with ~i3~, run the command ~xprop~ and click on
  the window you want the information from and inspect the line
  starting by ~WM_CLASS(STRING):~.

#+BEGIN_SRC bash
xprop  # and click on the window you want the information from
#+END_SRC


- For example with a window running ~chromium-browser~ application, I
  get the following line where ~chromium-browser~ is the /instance/,
  second ~Chromium-browser~ is the /class/:

#+BEGIN_SRC text
WM_CLASS(STRING) = "chromium-browser", "Chromium-browser"
#+END_SRC

** Multiple monitors
*** How can I display a monitor on the left of the other monitor?
- Use ~xrandr~ command.
- ~xrandr~: set the size, orientation and/or reflection of the outputs
  for a screen.
- If you want to display the monitor ~DP-2~ on the left of the
  monitor ~eDP-1~, run the command:

#+BEGIN_SRC bash
xrandr --output DP-2 --left-of eDP-1
#+END_SRC

- If you want to get the names of the outputs you want to display
  with ~xrandr~, run the command ~xrandr~ and seek for lines like
  those ones (in my case ~eDP-1~ and ~DP-2~ are the monitors I want
  to display side by side):

#+BEGIN_SRC text
eDP-1 connected primary 1366x768+0+0 (normal left inverted right x axis y axis) 309mm x 173mm
DP-2 connected 1280x1024+1366+0 (normal left inverted right x axis y axis) 338mm x 270mm
#+END_SRC

** Miscellaneous
*** What xbindkey command is for?
- ~xbindkey~: a grabbing keys program for X.
*** What xmodmap command is for?
- ~xmodmap~: utility for modifying keymaps and pointer button mappings
  in X.
*** How can I list the open windows?
- Use ~wmctrl~ command.
- ~wmctrl~: interact with a EWMH/NetWM compatible X Window Manager.
- If you want to list the windows being managed by the window
  manager, run the command:

#+BEGIN_SRC bash
wmctrl -l
#+END_SRC

*** How can I simulate a key plus mouse click from commande line?
- Use ~xdotool~ command.
- ~xdotool~: command-line X11 automation tool.
- See [[https://stackoverflow.com/questions/49066062/keymouse-click-simultaneous-xdotool][simultaneous key + mouse click]] on stackoverflow and [[http://manpages.ubuntu.com/manpages/trusty/man1/xdotool.1.html][xdotool]] man
  page on ubuntu.
- If you want to simulate ~alt+mouse-1~ simultaneously from
  command line, run the command:

#+BEGIN_SRC bash
xdotool keydown alt click 1 keyup alt
#+END_SRC

*** How can I get current mouse coordinates from bash?
- Use ~xdotool~ command.
- ~xdotool~: command-line X11 automation tool.
- See [[https://stackoverflow.com/questions/8480073/how-would-i-get-the-current-mouse-coordinates-in-bash][get current mouse coordinates]] on stackoverflow.
- If you want to get the current mouse coordinates location from
  command line, run the command:

#+BEGIN_SRC bash
xdotool getmouselocation
#+END_SRC

- If you want to get the current mouse coordinates location and
  set the variables ~X~ and ~Y~ to hold respectively the
  horizontal and vertical position, run the command:

#+BEGIN_SRC bash
eval $(xdotool getmouselocation --shell)
#+END_SRC

*** Some use cases of xdotool command
- If I run the command ~xdotool getactivewindow~ I get ~27263352~.
- If I run the command ~xdotool getactivewindow getwindowname~ from
  my terminal I get ~Terminal~.
- If I run the command ~xdotool getactivewindow | xprop -id 27263352
  WM_CLASS~, I got this output:

#+BEGIN_SRC text
WM_CLASS(STRING) = "gnome-terminal-server", "Gnome-terminal"
#+END_SRC

** Autokey
*** How can I install autokey?
- Use ~git~ and ~pip3~ commands.
- ~pip3~: a tool for installing and managing Python packages.
- ~git~: the stupid content tracker.
- See [[https://github.com/autokey/autokey/wiki/Installing][Installing]] wiki and [[https://pygobject.readthedocs.io/en/latest/getting_started.html][PyGObject]] getting started documentation.
- If you want to install ~autokey~ with ~pip3~, clone the
  repository, install dependencies that are not in ~setup.py~
  files as ~wheel~, ~dbus-python~ and ~PyGObject~, and, install
  ~autokey~ from the cloned repository. We do every needed steps
  in a ~python~ virtual environment. Finally, we make a symlink of
  ~autokey-gtk~ executable in ~~/.local/bin/~ directory to be able
  to use ~autokey~ widely without activating the ~python~ virtual
  environment. To do so, we run the commands:

#+BEGIN_SRC bash
$ git clone https://github.com/autokey/autokey.git
$ cd autokey
$ python3 -m venv ~/.py-venv/autokey/
$ source ~/.py-venv/autokey/bin/activate
(autokey) $ pip3 install wheel dbus-python
(autokey) $ sudo apt install libgirepository1.0-dev gcc \
            libcairo2-dev pkg-config python3-dev gir1.2-gtk-3.0 \
            # for PyGObject
(autokey) $ pip3 install pycairo
(autokey) $ pip3 install PyGObject
(autokey) $ pip3 install .
(autokey) $ ln -s ~/.py-venv/autokey/bin/autokey-gtk \
            ~/.local/bin/autokey-gtk
(autokey) $ deactivate
#+END_SRC

- To start ~autokey~ with the GUI, run the command:

#+BEGIN_SRC bash
autokey-gtk -c
#+END_SRC

- To start ~autokey~ in background, run the command ~autokey-gtk~
  without any command line arguments:

#+BEGIN_SRC bash
autokey-gtk
#+END_SRC

*** How can I have autokey run in background and start at login to my linux session?
- Use ~systemctl~, ~autokey-gtk~ commands and ~i3~ directive ~exec~.
- ~systemctl~: control the ~systemd~ system and ~service manager~.
- ~exec~: executes bash commands in the ~i3wm~ config file ~~/.config/i3/config~.
- If you want ~autokey~ to start in background when you login to
  your linux session, use the ~systemd~ and add it the /systemd
  unit file/ ~~/.config/systemd/user/autokey.service~:

#+BEGIN_SRC bash
[Unit]
Description=Desktop automation for Linux and X11
Documentation=https://github.com/autokey/autokey

[Service]
Type=notify
ExecStart=/home/tony/.local/bin/autokey-gtk
ExecStop=/bin/systemctl show --property MainPID --value emacs --user | kill
Restart=always

[Install]
WantedBy=default.target
#+END_SRC

- Then you have to enable the service and start it. To do so, run the
  command:

#+BEGIN_SRC bash
systemctl --user enable autokey
systemctl --user start autokey
#+END_SRC

*** Where are stored autokey config files?
- ~autokey~ config files are in ~~/.config/autokey/~ directory.
*** Where can I find autokey ressources?
- [[https://github.com/autokey/autokey][autokey]] github repository and the ~autokey~ wiki pages
  [[https://github.com/autokey/autokey/wiki/Installing][Installing]], [[https://github.com/autokey/autokey/wiki/FAQ][FAQ]], [[https://github.com/autokey/autokey/wiki/Scripting][Scripting]], [[https://github.com/autokey/autokey/wiki/API-Examples][API-Examples]], [[https://github.com/autokey/autokey/wiki/Special-Keys][Special-Keys]].
* Images
** Use images
*** How to set the wallpaper?
- Use the command ~feh~.
- ~feh~: Image viewer and cataloguer.
- See [[https://wiki.archlinux.org/index.php/feh][feh]] on archlinux wiki.
- If you want ~path/to/images.jpg~ to be you be your image
  background, run the command:

#+BEGIN_SRC bash
feh --bg-fill path/to/images.jpg
#+END_SRC

- If you want to remove your background image set with ~feh~, run
  the command:

#+BEGIN_SRC bash
xsetroot -solid black
#+END_SRC

** Manipulate images
*** How to convert images?
- Use the command ~convert~.
- ~convert~: convert  between  image  formats as well as resize an image.
- See [[https://www.howtogeek.com/109369/how-to-quickly-resize-convert-modify-images-from-the-linux-terminal/][convert image]] on howtogeek.
- If you want to convert the image ~image.png~ to the format
  ~jpg~, run the command:

#+BEGIN_SRC bash
convert image.png image.jpg
#+END_SRC

- If you want to install ~convert~, as it comes with the
  [[https://imagemagick.org/][imagemagick]] package, run the command:

#+BEGIN_SRC bash
sudo apt install imagemagick
#+END_SRC

*** How to resize an image?
- Use the command ~convert~.
- ~convert~: convert  between  image  formats as well as resize an
  image.
- See [[https://www.howtogeek.com/109369/how-to-quickly-resize-convert-modify-images-from-the-linux-terminal/][convert image]] on howtogeek.
- If you want to resize an image to 200 pixels in width and 100
  pixels in heigh, run the command:

#+BEGIN_SRC bash
convert image.png -resize 200x100 image.png
#+END_SRC

- If you want to install ~convert~, as it comes with the
  [[https://imagemagick.org/][imagemagick]] package, run the command:

#+BEGIN_SRC bash
sudo apt install imagemagick
#+END_SRC

* Backup
** rsync
*** With rsync how can I always replace the DEST file by the SRC file?
- Use ~-a~ flag of ~rsync~.
- It is a quick way of saying you want recursion and want to
  preserve almost everything.
- If you want to /always/ replace all the files with the same
  ~path~ on ~path/to/dest/~ by the files on ~path/to/src/~, run
  the command:

#+BEGIN_SRC bash
rsync -a path/to/src/ path/to/dest/
#+END_SRC

*** With rsync how can I always replace the DEST file by the SRC file /only/ if the SRC file is newer than the ~DEST~ file?
- Use ~-au~ flags of ~rsync~.
- Skip files that are newer on the receiver (~-u~ flag).
- If you want to replace all the files with the same
  ~path~ on ~path/to/dest/~ by the files on ~path/to/src/~ that
  are /newer/, run the command:

#+BEGIN_SRC bash
rsync -au path/to/src/ path/to/dest/
#+END_SRC

*** With rsync how can I keep the newer file between DEST and SRC file on the receiver and keep a *copy* on the receiver of the *older* of ~DEST~ file and ~SRC~ file?
- Use ~-aub~ flags of ~rsync~.
- ~-u~ flag: skip files that are newer on the receiver.
- ~-b~ flag: with this option, preexisting destination files are renamed as each file is transferred or deleted.
- If you want to keep the /newer/ files between ~path/to/dest/~
  and ~path/to/src/~ on the receiver (~path/to/dest/~) and keep a
  /copy/ on the receiver (~path/to/dest/~) of the /older/ files
  (by appending them a ~~~), run the command:

#+BEGIN_SRC bash
rsync -aub path/to/src/ path/to/dest/
#+END_SRC

*** With rsync how can I synchronize DEST directory and SRC directory?
- Use ~-au~ flags of ~rsync~.
- ~-a~ flag: it is a quick way of saying you want recursion and want to preserve almost everything.
- ~-u~ flag: skip files that are newer on the receiver.
- If you want to synchronize ~path/to/src/~ and ~path/to/dest/~,
  that is (~DEST~ and ~SRC~ become the same copy, keeping
  all files that were on ~DEST~ but not on ~SRC~ and vice-versa,
  and keeping the newer files (with the same ~path~) of the ~DEST~
  and ~SRC~ directory), run the commands:

#+BEGIN_SRC bash
rsync -au path/to/src/ path/to/dest/
rsync -au path/to/dest/ path/to/src/
#+END_SRC

*** With rsync how can I synchronize DEST directory and SRC directory, keep a copy of the older files and generate a log file?
- Use ~-aub~ and ~--backup-dir~ flags of ~rsync~.
- It is a quick way of saying you want recursion and want to preserve almost everything (~-a~ flag).
- ~-u~ flag: skip files that are newer on the receiver.
- ~-b~ flag: with this option, preexisting destination files are
  renamed as each file is transferred or deleted.
- ~--backup-dir~: in  combination  with the ~--backup~ option, this
  tells rsync to store all backups in the specified directory on the
  receiving side.
- If you want to synchronize ~path/to/src/~ and ~path/to/dest/~,
  and keep a copy of the older files in a *specified directory*
  ~backup~ (on both directorise ~path/to/src/~ and ~path/to/dest/~)
  and a log file ~backup.log~ (available on both directorise ~path/to/src/~
  and ~path/to/dest/~) that keep track of the synchronization
  process , run the commands:

#+BEGIN_SRC bash
rsync -aub --backup-dir="backup" path/to/dest/ path/to/src/ \
  | tee -a path/to/src/backup.log
rsync -aub --backup-dir="backup" path/to/src/ path/to/dest/ \
  | tee -a path/to/src/backup.log
rsync -aub --backup-dir="backup" path/to/dest/ path/to/src/ \
  | tee -a path/to/src/backup.log
rsync path/to/src/backup.log path/to/dest/backup.log
#+END_SRC

- Note 1: In the file ~backup.log~, you can see what happen
  during the synchronization. This way you can see the files that
  have been deleted on the ~SRC~ directory but still present on
  the ~DEST~ directory that you copied back into to the ~SRC~
  directory.
- Note 2: The directory ~backup~ contains all older files.
- Note 3: If on the ~SRC~ and ~DEST~ you had the file ~path-to/some-file~
  that differed, after the synchronization you can see the
  difference (how the newer was changed from the older), by running
  the command:

#+BEGIN_SRC bash
git diff path/to/src/backup/path-to/some-file path/to/src/path-to/some-file
#+END_SRC

- Note 4: After the synchronization, if you are happy, you can delete
  on both side (~SRC~ and ~DEST~ directories), the file
  ~backup.log~ and the directory ~backup~. To do so, run the
  commands:

#+BEGIN_SRC bash
rm -rf path/to/src/backup path/to/src/backup.log
rm -rf path/to/dest/backup path/to/dest/backup.log
#+END_SRC

*** With rsync how can I delete files on DEST that are not present on SRC?
- Use ~-a~, ~--delete~ flags of ~rsync~.
- (~-a~ flag): it is a quick way of saying you want recursion and want to preserve almost everything.
- ~--delete~ flag: this tells rsync to delete extraneous files from
  the receiving side (ones  that  aren’t on  the  sending  side), but
  only for the directories that are being synchronized.  You must have
  asked rsync to send the whole directory (e.g. "dir" or "dir/")
  without  using a  wildcard  for the directory’s contents
  (e.g. "dir/*") since the wildcard is expanded by the shell and rsync
  thus gets a request to transfer individual files, not the files’
  parent  directory.
- If you want to delete files on ~path/to/dest/~ that are not present
  on ~path/to/src/~, run the command:

#+BEGIN_SRC bash
rsync -a --delete path/to/src/ path/to/dest/
#+END_SRC

*** With rsync how can I delete files on DEST that I've note exclude the first time with rsync ?
- Use ~-a~, ~--delete-excluded~, ~--exclude~ flags of ~rsync~.
- ~-a~ flag: it is a quick way of saying you want recursion and want to preserve almost everything.
- ~--delete-excluded~ flag: in  addition  to  deleting  the files on the receiving side that are not on the sending side, this tells rsync to also delete any files on the receiving side that are excluded with ~--exclude~.
- ~--exclude~ flag: exclude files matching a pattern.
- If you first have send the  directories ~node_modules~
  accidentally from the ~path/to/src/~ directory to the
  ~path/to/dest/~ directory, you can delete them later. To do so,
  run the command:

#+BEGIN_SRC bash
rsync -a --exclude="*node_modules*" --delete-excluded \
  path/to/src/ path/to/dest/
#+END_SRC

*** With rsync how can I do a incremental backup?
- Use ~-avz~, ~--exclude~ and ~--exclude-exclude~ flags of
  ~rsync~ command.
- ~-a~ flag: it is a quick way of saying you want recursion and want
  to preserve almost everything.
- ~-v~ flag: increases the amount of information you are given during
  the transfer.
- ~-z~ flag: compresses the file data as it is sent to the destination
  machine.
- ~--exclude~ flag: exclude files matching a pattern.
- ~--delete-excluded~ flag: in  addition  to  deleting  the files on
  the receiving side that are not on the sending side, this tells
  rsync to also delete any files on the receiving side that are
  excluded with ~--exclude~.
- If you want ~DEST~ directory to be the exact copy of ~SRC~
  directory, but you just want to send the file that have changed
  ~SRC~, delete on ~DEST~ the file you have deleted on ~SRC~, and
  do not send (exclude) on ~DEST~ the ~node_modules~ directory on
  ~SRC~, run the command:

#+BEGIN_SRC bash
rsync -avz --exclude="*node_modules*" --delete-exclude \
  path/to/src/ path/to/dest/
#+END_SRC

** Backup and archive
*** What is a Backup?
- A /backup/ is a copy of data that can be used to restore the
  original in the event that your data is lost or damaged. If a
  company experiences data loss due to hardware failure, human
  error or natural disaster, a backup can be used to quickly
  restore that data.
*** What is an Archive?
- An /archive/ is a collection of historical records that are kept
  for long-term retention and used for future
  reference. Typically, archives contain data that is not actively
  used.
*** What is the difference between /backup/ and /archive/?
- Basically, a /backup/ is a /copy/ of a set of data, while an
  /archive/ holds /original/ data that has been /removed/ from its
  original location.
** Back up /etc directory
*** How can I review or revert changes that were made to /etc?
- Use ~etckeeper~ tool.
- ~etckeeper~: store ~/etc~ in ~git~.
- See [[https://etckeeper.branchable.com/README/][etckeeper]] README.
- If you want to install and initialize ~etckeeper~ on ubuntu,
  run the commands:

#+BEGIN_SRC bash
sudo apt install etckeeper
#+END_SRC

- If you want to ~commit~ changes made in ~/etc~ installing new
  package using ~apt~, do /nothing/, ~etckeeper~ do it for you.
- If you want to ~commit~ changes made in ~/etc~, run the
  commands:

#+BEGIN_SRC bash
cd /etc
sudo git add .  # or only a few files
sudo git commit -m "your message"
#+END_SRC

- If you want to /configure/ and tweak ~etckeeper~, see files and
  directories ~/etc/etckeeper/~ and ~/etc/etckeeper/etckeeper.conf~.
- If you want to /skip/ some files or directories from being
  stored into ~git~ repository, add them to ~/etc/.gitignore~.
- If I want to /revert/ changes to a previous state (commit), you
  must ~checkout~ to the previous commit and re-initialize
  ~etckeeper~, to do so run the commands:

#+BEGIN_SRC bash
sudo git checkout <previous-commit>
sudo etckeeper init
#+END_SRC

*** How can I back up the /etc directory to usb drive?
- Use ~rsync~ command.
- ~rsync~: a fast, versatile, remote (and local) file-copying tool.
- Be aware that ~/etc~ directory contains secret informations. For
  instance, SHA-512 password are stored in the file
  ~/etc/shadow~.
** Large files with git
*** What is git-annex?
- [[https://git-annex.branchable.com/][git-annex (homepage)]]
- [[https://git-annex.branchable.com/not/][git-annex is NOT ...]]
- [[https://git-annex.branchable.com/walkthrough/][git-annex (walkthrough)]]
- [[https://git-annex.branchable.com/tips/emacs_integration/][git-annex (emacs integration)]]
*** What is git-lfs?
- [[https://git-lfs.github.com/][git-lfs (homepage)]]
- [[https://www.atlassian.com/git/tutorials/git-lfs][git-lfs (tutorial)]]
- [[https://www.youtube.com/watch?v=006RUPVIP-c][git-lfs (talk)]]
*** What is the difference between git-lfs and git-annex?
- See discussions [[https://git-annex.branchable.com/todo/git_smudge_clean_interface_suboptiomal/][git smudge clean interface suboptiomal]] and [[https://lwn.net/Articles/774125/][large
  files with git (article)]].
- ~git-lfs~ differs from ~git-annex~ in that:
- With ~git-lfs~, all the large files in the repository are usually
  present in the working tree; it doesn't have a way to drop content
  that is not wanted locally while keeping other content locally
  available, as ~git-annex~ does.
- And so ~git-lfs~ does not need to be able to get content like
  ~git-annex~ can do either.
- ~git-lfs~ also differs in that it uses a central server, which is
  trusted to retain content, so it doesn't try to avoid losing the
  local copy, which could be the only copy, as ~git-annex~ does.

* UI
** GTK
*** How to make chromium using GTK?
- If you want that ~chromium~ uses ~GTK~, in ~chromium~ allow ~GTK+~
  theme in: ~Settings > Preferences > Appearence > Use GTK+ theme~.
*** What are the GTK config files?
- ~~/.gtkrc-2.0~ for ~gtk2~,
- ~~/.config/gtk-3.0/settings.ini~ for ~gtk-3~,
- ~/etc/gtk-3.0/settings.ini~.
*** How to get information on the GTK settings?
- Run the command:

#+BEGIN_SRC bash
gtk-query-settings
#+END_SRC
*** Where are stored the GTK themes?
- You can find ~GTK~ themes in the directory: ~/usr/share/themes/~.
*** How can I add emacs like keybinding in GTK applications like chromium?
- In ~gtk-2~ add the line  in your ~GTK~ config file
  ~/.gtkrc-2.0~.

#+BEGIN_SRC text
gtk-key-theme-name = "Emacs"
#+END_SRC

- In ~gtk-3~, add the following line in your ~GTK~ config file
  ~/.config/gtk-3.0/settings.ini~.

#+BEGIN_SRC text
gtk-key-theme-name = Emacs
#+END_SRC

*** Where the emacs like keybinding in GTK applications are defined?
- In ~gtk-2~, the implemented ~emacs~ keybinding can be found in the
  file ~/usr/share/themes/Emacs/gtk-2.0-key/gtkrc~:

#+BEGIN_SRC text
#
# Bindings for GtkTextView and GtkEntry
#
binding "gtk-emacs-text-entry"
{
  bind "<ctrl>b" { "move-cursor" (logical-positions, -1, 0) }
  bind "<shift><ctrl>b" { "move-cursor" (logical-positions, -1, 1) }
  bind "<ctrl>f" { "move-cursor" (logical-positions, 1, 0) }
  bind "<shift><ctrl>f" { "move-cursor" (logical-positions, 1, 1) }

  bind "<alt>b" { "move-cursor" (words, -1, 0) }
  bind "<shift><alt>b" { "move-cursor" (words, -1, 1) }
  bind "<alt>f" { "move-cursor" (words, 1, 0) }
  bind "<shift><alt>f" { "move-cursor" (words, 1, 1) }

  bind "<ctrl>a" { "move-cursor" (paragraph-ends, -1, 0) }
  bind "<shift><ctrl>a" { "move-cursor" (paragraph-ends, -1, 1) }
  bind "<ctrl>e" { "move-cursor" (paragraph-ends, 1, 0) }
  bind "<shift><ctrl>e" { "move-cursor" (paragraph-ends, 1, 1) }

  bind "<ctrl>w" { "cut-clipboard" () }
  bind "<ctrl>y" { "paste-clipboard" () }

  bind "<ctrl>d" { "delete-from-cursor" (chars, 1) }
  bind "<alt>d" { "delete-from-cursor" (word-ends, 1) }
  bind "<ctrl>k" { "delete-from-cursor" (paragraph-ends, 1) }
  bind "<alt>backslash" { "delete-from-cursor" (whitespace, 1) }

  bind "<alt>space" { "delete-from-cursor" (whitespace, 1)
                      "insert-at-cursor" (" ") }
  bind "<alt>KP_Space" { "delete-from-cursor" (whitespace, 1)
                         "insert-at-cursor" (" ")  }

  #
  # Some non-Emacs keybindings people are attached to
  #
  bind "<ctrl>u" {
     "move-cursor" (paragraph-ends, -1, 0)
     "delete-from-cursor" (paragraph-ends, 1)
  }
  bind "<ctrl>h" { "delete-from-cursor" (chars, -1) }
  bind "<ctrl>w" { "delete-from-cursor" (word-ends, -1) }
}

#
# Bindings for GtkTextView
#
binding "gtk-emacs-text-view"
{
  bind "<ctrl>p" { "move-cursor" (display-lines, -1, 0) }
  bind "<shift><ctrl>p" { "move-cursor" (display-lines, -1, 1) }
  bind "<ctrl>n" { "move-cursor" (display-lines, 1, 0) }
  bind "<shift><ctrl>n" { "move-cursor" (display-lines, 1, 1) }

  bind "<ctrl>space" { "set-anchor" () }
  bind "<ctrl>KP_Space" { "set-anchor" () }
}

#
# Bindings for GtkTreeView
#
binding "gtk-emacs-tree-view"
{
  bind "<ctrl>s" { "start-interactive-search" () }
  bind "<ctrl>f" { "move-cursor" (logical-positions, 1) }
  bind "<ctrl>b" { "move-cursor" (logical-positions, -1) }
}

#
# Bindings for menus
#
binding "gtk-emacs-menu"
{
  bind "<ctrl>n" { "move-current" (next) }
  bind "<ctrl>p" { "move-current" (prev) }
  bind "<ctrl>f" { "move-current" (child) }
  bind "<ctrl>b" { "move-current" (parent) }
}

class "GtkEntry" binding "gtk-emacs-text-entry"
class "GtkTextView" binding "gtk-emacs-text-entry"
class "GtkTextView" binding "gtk-emacs-text-view"
class "GtkTreeView" binding "gtk-emacs-tree-view"
class "GtkMenuShell" binding "gtk-emacs-menu"
#+END_SRC

- In ~gtk-3~, the implemented ~emacs~ keybinding can be found in the
  file ~/usr/share/themes/Emacs/gtk-3.0/gtk-keys.css~.

#+BEGIN_SRC css
/*
 * Bindings for GtkTextView and GtkEntry
 */
@binding-set gtk-emacs-text-entry
{
  bind "<ctrl>b" { "move-cursor" (logical-positions, -1, 0) };
  bind "<shift><ctrl>b" { "move-cursor" (logical-positions, -1, 1) };
  bind "<ctrl>f" { "move-cursor" (logical-positions, 1, 0) };
  bind "<shift><ctrl>f" { "move-cursor" (logical-positions, 1, 1) };

  bind "<alt>b" { "move-cursor" (words, -1, 0) };
  bind "<shift><alt>b" { "move-cursor" (words, -1, 1) };
  bind "<alt>f" { "move-cursor" (words, 1, 0) };
  bind "<shift><alt>f" { "move-cursor" (words, 1, 1) };

  bind "<ctrl>a" { "move-cursor" (paragraph-ends, -1, 0) };
  bind "<shift><ctrl>a" { "move-cursor" (paragraph-ends, -1, 1) };
  bind "<ctrl>e" { "move-cursor" (paragraph-ends, 1, 0) };
  bind "<shift><ctrl>e" { "move-cursor" (paragraph-ends, 1, 1) };

  /* bind "<ctrl>w" { "cut-clipboard" () }; */
  bind "<ctrl>y" { "paste-clipboard" () };

  bind "<ctrl>d" { "delete-from-cursor" (chars, 1) };
  bind "<alt>d" { "delete-from-cursor" (word-ends, 1) };
  bind "<ctrl>k" { "delete-from-cursor" (paragraph-ends, 1) };
  bind "<alt>backslash" { "delete-from-cursor" (whitespace, 1) };

  bind "<alt>space" { "delete-from-cursor" (whitespace, 1)
                      "insert-at-cursor" (" ") };
  bind "<alt>KP_Space" { "delete-from-cursor" (whitespace, 1)
                         "insert-at-cursor" (" ")  };
  /*
   * Some non-Emacs keybindings people are attached to
   */
  bind "<ctrl>u" { "move-cursor" (paragraph-ends, -1, 0)
                   "delete-from-cursor" (paragraph-ends, 1) };

  bind "<ctrl>h" { "delete-from-cursor" (chars, -1) };
  bind "<ctrl>w" { "delete-from-cursor" (word-ends, -1) };
}

/*
 * Bindings for GtkTextView
 */
@binding-set gtk-emacs-text-view
{
  bind "<ctrl>p" { "move-cursor" (display-lines, -1, 0) };
  bind "<shift><ctrl>p" { "move-cursor" (display-lines, -1, 1) };
  bind "<ctrl>n" { "move-cursor" (display-lines, 1, 0) };
  bind "<shift><ctrl>n" { "move-cursor" (display-lines, 1, 1) };

  bind "<ctrl>space" { "set-anchor" () };
  bind "<ctrl>KP_Space" { "set-anchor" () };
}

/*
 * Bindings for GtkTreeView
 */
@binding-set gtk-emacs-tree-view
{
  bind "<ctrl>s" { "start-interactive-search" () };
  bind "<ctrl>f" { "move-cursor" (logical-positions, 1) };
  bind "<ctrl>b" { "move-cursor" (logical-positions, -1) };
}

/*
 * Bindings for menus
 */
@binding-set gtk-emacs-menu
{
  bind "<ctrl>n" { "move-current" (next) };
  bind "<ctrl>p" { "move-current" (prev) };
  bind "<ctrl>f" { "move-current" (child) };
  bind "<ctrl>b" { "move-current" (parent) };
}

entry {
  -gtk-key-bindings: gtk-emacs-text-entry;
}

textview {
  -gtk-key-bindings: gtk-emacs-text-entry, gtk-emacs-text-view;
}

treeview {
  -gtk-key-bindings: gtk-emacs-tree-view;
}

GtkMenuShell {
  -gtk-key-bindings: gtk-emacs-menu;
}
#+END_SRC
*** How to switch between GTK themes?
- Use ~gtk-theme-switch~ command.
- To install it, run the command:

#+BEGIN_SRC bash
sudo apt install gtk-theme-switch
#+END_SRC

*** How to modify text size of GTK applications like chromium?
- In ~gtk-3~, add the following line in your ~GTK~ config file
  ~/.config/gtk-3.0/settings.ini~.

#+BEGIN_SRC text
gtk-font-name=Sans 12
#+END_SRC
*** How can I find GTK resources?
- [[https://wiki.archlinux.org/index.php/GTK][GTK (archlinux)]]
- [[https://www.gtk.org][GTK (home page)]]
- [[https://developer.gnome.org/gtk3/stable/][GTK+ 3 Reference Manual]]
- [[https://developer.gnome.org/gtk3/stable/GtkSettings.html][GTK+ 3 Settings (Reference Manual)]]
- [[https://python-gtk-3-tutorial.readthedocs.io/en/latest/][python GTK 3 (documentation)]]
- [[https://python-gtk-3-tutorial.readthedocs.io/en/latest/popover.html][python GTK 3 (popover)]]
- [[https://www.dedoimedo.com/computers/gnome-edit-theme.html][gtk - gnome edit theme]]
*** How can I test/debug components of an application that uses GTK for the UI?
- Use ~GTK inspector~.
- See [[https://wiki.gnome.org/action/show/Projects/GTK/Inspector?action=show&redirect=Projects%2FGTK%2B%2FInspector][GTK inspector]] on gnome.org.
- To do so, run the command:

#+BEGIN_SRC bash
GTK_DEBUG=interactive <app-name>
#+END_SRC

- To install ~GTK inspector~, you have to install the package
~libgtk-3-dev~, to do so, run the command:

#+BEGIN_SRC bash
sudo apt install libgtk-3-dev
#+END_SRC

** Xft
*** How can I scale up my screen view?
- Use ~~/.Xresources~ file and/or ~xrdb~ command.
- Many desktop environments use ~xrdb~ to load ~~/.Xresources~
  files on session startup to initialize the resource database.
- See [[https://wiki.archlinux.org/index.php/x_resources][Xresources]] and [[https://wiki.archlinux.org/index.php/HiDPI][HiDPX]] archlinux.
- If you want to scale up what you see on your screen, saying that
  your ~dpi~ (dot per inch) is equal to ~96~ and you want to
  raise up to ~144 dpi~ (dpi must be a multiple of 96), you can
  add this line ~Xft.dpi: 144~ to the file ~~/.Xresources~, and
  run the command:

#+BEGIN_SRC bash
xrdb -merge ~/.Xresources
#+END_SRC

- If you want to check the currently loaded resources, run the
  command:

#+BEGIN_SRC bash
xrdb -query all
#+END_SRC

- To see the default settings of your installed ~X11 apps~, look in
  ~/etc/X11/app-defaults/~.
** i3 window manager
*** How can I debug i3status and i3blocks config files?
- Use ~i3status~ or ~i3bloks~ commands.
- ~i3blocks~: a flexible scheduler for your i3bar blocks.
- ~i3status~: generates a status line for i3bar.
- If you want to debug ~i3status~ config file, run the command:

#+BEGIN_SRC bash
i3status ~/config/i3/config
#+END_SRC

- If you want to debug ~i3blocks~ config file, run the command:

#+BEGIN_SRC bash
i3blocks -c ~/.config/i3blocks/config
#+END_SRC

*** How can I know the key name use by i3 config file for a specific key?
- Use ~xev~ command.
- ~xev~: print contents of X events.
- If you want to get information about a specific key on your
  keyboard, that you can use in your i3 config file, run the
  command ~xev~ in your terminal, a (Event tester) window popup, then press the
  key from which you want to get information. For instance,
  pressing the ~space~ key on my keyboard, I get this following
  output where ~keycode 65 (keysym 0x20, space)~ is the interesting
  part and the name to use in i3 config file is ~space~.

#+BEGIN_SRC text
KeyRelease event, serial 34, synthetic NO, window 0x1400001,
    root 0x14f, subw 0x0, time 713381482, (524,452), root:(528,472),
    state 0x0, keycode 65 (keysym 0x20, space), same_screen YES,
    XLookupString gives 1 bytes: (20) " "
    XFilterEvent returns: False
#+END_SRC

** Gnome
*** How can I reset all gnome settings?
- Use ~gnome-tweaks~ command.
- ~gnome-tweaks~: customize your Ubuntu Gnome desktop.
- If you want to reset all gnome desktop settings to default,
  launch ~gnome-tweak~ and in its gnome menu click ~Reset to
  Defaults~.
- if you want to install ~gnome-tweaks~, run the command:

#+BEGIN_SRC bash
sudo apt install gnome-tweaks
#+END_SRC

*** How can I modify the text size on Gnome desktop?
- Use ~gsettings~ command.
- ~gsettings~: GSettings configuration tool.
- See example [[https://askubuntu.com/questions/197828/how-to-find-and-change-the-screen-dpi][find and change the screen dpi]] on askubuntu.
- If you want to change the ~dpi~ in Ubuntu Gnome desktop, you
  can't because it's hard coded to a value of ~96 dpi~. But you
  can change the text size of the applications. For instance, to
  increase the text size by ~1.2~ (of the hard coded ~96 dpi~,
  i.e. ~1.2*96~), /set/ to ~1.2~ the value of the /key/
  ~text-scaling-factor~ of the /shema/ ~org.gnome.desktop.interface~
  run the command:

#+BEGIN_SRC bash
gsettings set org.gnome.desktop.interface text-scaling-factor 1.2
#+END_SRC

- If you want to go back to the default text size, /reset/ the
  value of /key/ ~text-scaling-factor~. To do so, run the command:

#+BEGIN_SRC bash
gsettings reset org.gnome.desktop.interface text-scaling-factor
#+END_SRC

** fonts
*** How can I list all available font on my system?
- Use ~fc-list~ command.
- ~fc-list~: list available fonts.
- If you want to list all available font, run the command:

#+BEGIN_SRC bash
fc-list
#+END_SRC

- Note: the font ~symbola~ allow you to print all ~unicode~ character.
* Miscellaneous
** Links
*** Where can I find linux ressources?
- From linuxize the following articles are worth reading: [[https://linuxize.com/post/scheduling-cron-jobs-with-crontab/][cron jobs]],
  [[https://linuxize.com/post/how-to-setup-a-git-server/][setup git server]], [[https://linuxize.com/post/how-to-setup-ftp-server-with-vsftpd-on-ubuntu-18-04/][setup ftp server]], [[https://linuxize.com/post/how-to-set-up-sftp-chroot-jail/][setup sftp]], [[https://linuxize.com/post/how-to-add-apt-repository-in-ubuntu/][add apt repository]],
  [[https://linuxize.com/post/linux-xargs-command/][xargs command]], [[https://linuxize.com/post/linux-watch-command/][watch command]], [[https://linuxize.com/post/etc-shadow-file/][/etc/shadow file]], [[https://linuxize.com/post/how-to-change-hostname-on-ubuntu-18-04/][change hostname on
  ubuntu]], [[https://linuxize.com/post/how-get-size-of-file-directory-linux/][size of file and directory]].
- [[https://whatismyipaddress.com/hostname][computer hostname]]: from whatismyipaddress.com.
- [[https://askubuntu.com/questions/394067/why-use-sticky-bit][Why use sticky bit?]]: on askubuntu.
- [[https://en.wikipedia.org/wiki/Passwd][passwd command line]] and [[https://fr.wikipedia.org/wiki/POSIX][POSIX]]: wikipedia articles.
- [[http://docopt.org/][docopt]]: a cli description language. It helps you define the
  interface for your command-line app and automatically generate a
  parser for it.
- [[https://linoxide.com/linux-how-to/linux-commands-brief-outline-examples/][linux commands]]: great list of 93 various command lines by linoxide.
- [[https://wiki.archlinux.org/index.php/Desktop_environment][Desktop_environment]] and [[https://wiki.archlinux.org/index.php/Window_manager][Window_manager]]: archlinux wiki pages.
- [[https://www.linuxprogrammingblog.com/all-about-linux-signals?page=9][real-time signals]]: All about linux signals by Linux Programming
  Blog.
** terminal
*** How can I check which terminal I'm using?
- Use ~cat~ and ~grep~ commands.
- ~cat~: concatenate files and print on the standard output.
- ~grep~: print lines matching a pattern.
- See [[https://askubuntu.com/questions/640096/how-do-i-check-which-terminal-i-am-using][which terminal i am using]] on askubuntu.
- If you want to check which terminal you are using, run the
  command:

#+BEGIN_SRC bash
cat /etc/alternatives/x-terminal-emulator | grep exec
#+END_SRC

** desktop
*** How can I send a desktop notification?
- Use ~notify-send~ command.
- ~notify-send~: a program to send desktop notifications.
- If you want to send the message ~hello world~ to the desktop and
  that the popup window notification keep alive 3 seconds, run
  the command:

#+BEGIN_SRC bash
notify-send -t 3000 "hello world"
#+END_SRC

** environment variables
*** How can I print all environment variables?
- Use ~printenv~ command.
- ~printenv~: print all or part of environment.
- If you want to print all environment variables, run the command:

#+BEGIN_SRC bash
printenv
#+END_SRC

*** How can I list colors used in my terminal?
- Use ~dircolors~ command.
- ~dircolors~: color setup for ~ls~.
- If you want to print the color used by ~ls~ command in your
  terminal, run the command:

#+BEGIN_SRC bash
dircolors --print-database
#+END_SRC

** Ubuntu
*** How to check your ubuntu version?
- Use ~lsb_release~ command.
- ~lsb_release~: Print distribution-specific information.
- See [[https://linuxize.com/post/how-to-check-your-ubuntu-version/][linuxize]].
- If you want to know your Ubuntu distribution version, run the
  command:

#+BEGIN_SRC bash
lsb_release -d
#+END_SRC
`;

export default orgContent
