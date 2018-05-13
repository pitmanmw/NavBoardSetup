sudo killall gpsd
sudo rm -v /var/run/gpsd.sock
#sudo gpsmon /dev/gps
sudo gpsd /dev/gps -F /var/run/gpsd.sock
sudo service ntp restart
