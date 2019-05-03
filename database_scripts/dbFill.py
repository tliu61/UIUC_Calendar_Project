#!/usr/bin/env python

"""
 * @file dbFill.py
 * Used in CS498RK MP4 to populate database with randomly generated users and events.
 *
 * @author Aswin Sivaraman
 * @date Created: Spring 2015
 * @date Modified: Spring 2015
 * @date Modified: Spring 2019
"""

import sys
import getopt
import http.client
import urllib
import json
from random import randint
from random import choice
from datetime import date
from time import mktime

#import images from local
img1 = 'https://www.swchs.com/wp-content/uploads/2019/03/events.jpg'
img2 = 'http://www.so-events.at/SYSTEM/image_background/standard/background_02.jpg'
img3 = 'https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg'
img4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2HxwnizDt0flJTzQGTHJxbITOjF_7bEx_4RmHkZ0DcWoPBqe'
img5 = 'https://nicolesyblog.com/wp-content/uploads/2011/04/nicolesy-food-6490_Edit_131011.jpg'
img6 = 'https://format-com-cld-res.cloudinary.com/image/private/s--tv6LHD35--/c_limit,g_center,h_1200,w_65535/a_auto,fl_keep_iptc.progressive,q_95/v1/7707f8b1b492ad9fc7bab4f031d9d035/burger_update.jpg'
img7 = 'https://ewscripps.brightspotcdn.com/dims4/default/3f2a8fa/2147483647/strip/true/crop/640x360+0+25/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.abc15.com%2Fphoto%2F2017%2F03%2F25%2FIMG_1345_1490511415361_57374237_ver1.0_640_480.JPG'
img8 = 'https://s3.amazonaws.com/renter-blog-assets/blog/wp-content/uploads/2018/08/27111730/Outdoors-Cities.jpg'
img9 = 'https://ewscripps.brightspotcdn.com/dims4/default/2ef4284/2147483647/strip/true/crop/500x281+0+24/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F7f%2F14%2Fa38a1ff34a2486d07294f3a140ab%2Fma-story-coasters-cta.jpg'
img10 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QqE_eZyDbsaeAkTcrq650uQjy9vKcy3HdtR0C3xQ11xq-Objng'
img11 = 'http://web.hep.uiuc.edu/hepg/images/photos/2.jpg'
img12 = 'https://cdn.cnn.com/cnnnext/dam/assets/190425160639-02-avengers-endgame-thumb-imax-poster-super-tease.jpg'
img13 = 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/site/54/images/BhPgYb7ATwCkxpVFmMjF_635892552728342323-2053461056_Woman-reading-a-book-014.jpg'
img14 = 'https://4.bp.blogspot.com/-__e53RCeVfc/WqWMglwcfuI/AAAAAAAADl4/rq59k5X28BUuAp2mCezRhdFePADEqUDZgCLcBGAs/s1600/Chill%2BWallpaper%2BEngine.jpg'
img15 = 'https://static1.squarespace.com/static/58c1a4b8e4fcb5954a9c0cae/t/5c06d1934fa51a4f829e25fa/1543950765304/feature-image-dec0418-large.png'

imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

def usage():
    print('dbFill.py -u <baseurl> -p <port> -n <numUsers> -t <numEvents>')

def getUsers(conn):
    # Retrieve the list of users
    conn.request("GET","""/api/users?filter={"_id":1}""")
    response = conn.getresponse()
    data = response.read()
    d = json.loads(data)

    # Array of user IDs
    users = [str(d['data'][x]['_id']) for x in range(len(d['data']))]

    return users

def main(argv):

    # Server Base URL and port
    baseurl = "localhost"
    port = 4000

    # Number of POSTs that will be made to the server
    userCount = 50
    eventCount = 200

    try:
        opts, args = getopt.getopt(argv,"hu:p:n:t:",["url=","port=","users=","events="])
    except getopt.GetoptError:
        usage()
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
             usage()
             sys.exit()
        elif opt in ("-u", "--url"):
             baseurl = str(arg)
        elif opt in ("-p", "--port"):
             port = int(arg)
        elif opt in ("-n", "--users"):
             userCount = int(arg)
        elif opt in ("-t", "--events"):
             eventCount = int(arg)

    # Python array containing common first names and last names
    firstNames = ["james","john","robert","michael","william","david","richard","charles","joseph","thomas","christopher","daniel","paul","mark","donald","george","kenneth","steven","edward","brian","ronald","anthony","kevin","jason","matthew","gary","timothy","jose","larry","jeffrey","frank","scott","eric","stephen","andrew","raymond","gregory","joshua","jerry","dennis","walter","patrick","peter","harold","douglas","henry","carl","arthur","ryan","roger","joe","juan","jack","albert","jonathan","justin","terry","gerald","keith","samuel","willie","ralph","lawrence","nicholas","roy","benjamin","bruce","brandon","adam","harry","fred","wayne","billy","steve","louis","jeremy","aaron","randy","howard","eugene","carlos","russell","bobby","victor","martin","ernest","phillip","todd","jesse","craig","alan","shawn","clarence","sean","philip","chris","johnny","earl","jimmy","antonio","danny","bryan","tony","luis","mike","stanley","leonard","nathan","dale","manuel","rodney","curtis","norman","allen","marvin","vincent","glenn","jeffery","travis","jeff","chad","jacob","lee","melvin","alfred","kyle","francis","bradley","jesus","herbert","frederick","ray","joel","edwin","don","eddie","ricky","troy","randall","barry","alexander","bernard","mario","leroy","francisco","marcus","micheal","theodore","clifford","miguel","oscar","jay","jim","tom","calvin","alex","jon","ronnie","bill","lloyd","tommy","leon","derek","warren","darrell","jerome","floyd","leo","alvin","tim","wesley","gordon","dean","greg","jorge","dustin","pedro","derrick","dan","lewis","zachary","corey","herman","maurice","vernon","roberto","clyde","glen","hector","shane","ricardo","sam","rick","lester","brent","ramon","charlie","tyler","gilbert","gene"]
    lastNames = ["smith","johnson","williams","jones","brown","davis","miller","wilson","moore","taylor","anderson","thomas","jackson","white","harris","martin","thompson","garcia","martinez","robinson","clark","rodriguez","lewis","lee","walker","hall","allen","young","hernandez","king","wright","lopez","hill","scott","green","adams","baker","gonzalez","nelson","carter","mitchell","perez","roberts","turner","phillips","campbell","parker","evans","edwards","collins","stewart","sanchez","morris","rogers","reed","cook","morgan","bell","murphy","bailey","rivera","cooper","richardson","cox","howard","ward","torres","peterson","gray","ramirez","james","watson","brooks","kelly","sanders","price","bennett","wood","barnes","ross","henderson","coleman","jenkins","perry","powell","long","patterson","hughes","flores","washington","butler","simmons","foster","gonzales","bryant","alexander","russell","griffin","diaz","hayes"]

    # Server to connect to (1: url, 2: port number)
    conn = http.client.HTTPConnection(baseurl, port)

    # HTTP Headers
    headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}

    # Array of user IDs
    userIDs = []
    userNames = []
    userEmails = []

    # Loop 'userCount' number of times
    for i in range(userCount):

        # Pick a random first name and last name
        x = randint(0,99)
        y = randint(0,99)
        params = urllib.parse.urlencode({ \
            'name': firstNames[x] + " " + lastNames[y], \
            'email': firstNames[x] + "@" + lastNames[y] + ".com", \
            'password': "password", \
            'securityquestion': "What is your favorite pet?", \
            'securityanswer': "Dog" \
            })

        # POST the user
        conn.request("POST", "/api/users", params, headers)
        response = conn.getresponse()
        data = response.read()
        d = json.loads(data)

        # Store the users id
        # print(d)
        userIDs.append(str(d['data']['_id']))
        userNames.append(str(d['data']['name']))
        userEmails.append(str(d['data']['email']))

    # Open 'tasks.txt' for sample event names
    f = open('tasks.txt','r')
    eventNames = f.read().splitlines()

    # Loop 'eventCount' number of times
    for i in range(eventCount):

        # Randomly generate event parameters
        user = randint(0,len(userIDs)-1)
        userID = userIDs[user]
        userName = userNames[user]
        userEmail = userEmails[user]
        eventDate = (mktime(date.today().timetuple()) + randint(86400,864000)) * 1000
        introduction = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        address = "999 Sample Address, Champaign IL 61820"
        coverpicture = choice(imageList)
        tags = "Default"
        params = urllib.parse.urlencode({ \
            'title': choice(eventNames), \
            'date': eventDate, \
            'creator': userName, \
            'email': userEmail, \
            'address': address, \
            'introduction': introduction, \
            'coverpicture': coverpicture,
            'tags': tags \
            })

        # POST the event
        conn.request("POST", "/api/events", params, headers)
        response = conn.getresponse()
        data = response.read()
        d = json.loads(data)
        # print(d)

    # Exit gracefully
    conn.close()
    print(str(userCount)+" users and "+str(eventCount)+" events added at "+baseurl+":"+str(port))


if __name__ == "__main__":
     main(sys.argv[1:])
