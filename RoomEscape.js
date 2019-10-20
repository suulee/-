//=========================================================
//
// 20191020     RoomEscape.js    20164111 Lee SuYoung
//
//=========================================================








//================= Room1 (Main방) ========================

// Main방 생성
room = game.createRoom("room", "배경-1.png") 


//문(휴식방)생성
room.door = room.createObject("door", "문-오른쪽-닫힘.png") 
room.door.setWidth(136) 
room.locateObject(room.door, 1049, 300) 
room.door.lock() 

room.door.onClick = function() { 
	if(room.door.isClosed()){ 
		room.door.open() 
	} else if (room.door.isOpened()){ 
		game.move(room2)
		printMessage("휴식을 취할 수 있는 방이 나왔다!")
	} else if (room.door.isLocked()){ 
		printMessage("문이 잠겨있다") 
	}
}

room.door.onOpen = function() { 
	room.door.setSprite("문-오른쪽-열림.png") 
	room.door3.show() 
	room.keypad1.show() 
	printMessage("없었던 문과 자물쇠가 생겼다!")


}



//문(탈출방)생성
room.door3 = room.createObject("door3", "문-오른쪽-닫힘.png") 
room.door3.setWidth(127) 
room.locateObject(room.door3, 630, 242) 
room.door3.lock() 
room.door3.hide()

room.door3.onClick = function() { 
	if(room.door3.isClosed()){ 
		room.door3.open() 
	} else if (room.door3.isOpened()){ 
		game.move(room3)
		printMessage("여긴 창고인가.. 어두워서 안보이네..")

	} else if (room.door3.isLocked()){ 
		printMessage("문이 잠겨있다") 
	}
}

room.door3.onOpen = function() { 
	room.door3.setSprite("문-오른쪽-열림.png") 
}


//자물쇠(휴식방)
room.keypad = room.createObject("keypad", "숫자키-우.png") 
room.keypad.setWidth(50) 
room.locateObject(room.keypad, 930, 250) 

room.keypad.onClick = function() {
	showKeypad("number", "1011" , function(){ 
		room.door.unlock() 
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}



//자물쇠(탈출방)
room.keypad1 = room.createObject("keypad1", "숫자키-우.png") 
room.keypad1.setWidth(50) 
room.locateObject(room.keypad1, 740, 223) 
room.keypad1.hide()


room.keypad1.onClick = function() {
	showKeypad("alphabet", "CLASS" , function(){ 
		room.door3.unlock() 
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}


//건전지
room.battery=room.createObject("battery","건전지.png")
room.battery.setWidth(30) //30이 적당
room.locateObject(room.battery,240,430)

room.battery.onClick=function(){
    printMessage("건전지를 얻었다!")
    room.battery.pick()
}



//교탁
room.big_table = room.createObject("big_table", "교탁-뒤왼쪽.png") 
room.big_table.setWidth(250)
room.locateObject(room.big_table, 300, 400)

room.big_table.move=true
room.big_table.onDrag=function(direction){
	if(direction=="Right"&&room.big_table.move){
		printMessage("교탁을 밀어버리니까 건전지가 있네???")
		room.big_table.moveX(100)
		room.big_table.moveY(-30)
		room.big_table.move=false
	}
	else{}
}


//텔레비전
room.televi = room.createObject("televi", "TV2-1.png") 
room.televi.setWidth(200)
room.locateObject(room.televi, 250, 200)

room.televi.onClick=function(){
	if(game.getHandItem()==room2.remote_full){
		showVideoPlayer("손호준.mp4")	 //비디오재생
	}
	else{
		printMessage("전원을 켜기 위해서는 리모컨이 필요해보인다.")
	}
}



//쓰레기통
room.trashcan = room.createObject("trashcan", "쓰레기통-좌-닫힘.png") 
room.trashcan.setWidth(150)
room.locateObject(room.trashcan, 830, 390)

room.book=room.createObject("book","노트.png")
room.book.hide()
room.book.setItemDescription("개교기념일을 알면 좀 쉴 수 있을것 같다 .")

room.trashcan.onClick = function() { 
	if(room.trashcan.isClosed()){ 
        room.trashcan.open() 
        printMessage("책을 찾았다.")
	} else {}
}

room.trashcan.onOpen = function() { 
	room.trashcan.setSprite("쓰레기통-좌-열림.png") 
	room.book.pick()
}


//책상
room.table_6per1 = room.createObject("table_6per1", "6인테이블-왼쪽.png") 
room.table_6per1.setWidth(400)
room.locateObject(room.table_6per1, 400, 500)


room.table_6per2 = room.createObject("table_6per2", "6인테이블-왼쪽.png") 
room.table_6per2.setWidth(400)
room.locateObject(room.table_6per2, 565, 550)

room.table_6per2.onClick=function(){
	if(game.getHandItem()==room.mirror){
		printMessage("좀 쉬고싶다..공부하기 싫으니까 책을 쓰레기통에 버려야지!")
	}else{
    printMessage("책상 위에 뭐가 적혀있다... 작아서 잘 안보이는데.")
}}


room.table_6per3 = room.createObject("table_6per3", "6인테이블-왼쪽.png") 
room.table_6per3.setWidth(400)
room.locateObject(room.table_6per3, 800, 600)



//돋보기
room.mirror = room.createObject("mirror", "돋보기.png") 
room.mirror.setWidth(60)
room.locateObject(room.mirror, 250, 620)
room.mirror.onClick=function(){
    printMessage("돋보기가 떨어져있네???")
    room.mirror.pick()
}
















//================= Room2 (힌트방) ==============================

//room2생성
room2=game.createRoom("room2","배경-5.png")


//문
room2.door2=room2.createObject("door2","문-왼쪽-열림.png")
room2.door2.setWidth(136)
room2.locateObject(room2.door2,300,290)
room2.door2.open()

room2.door2.onClick=function(){
	game.move(room)
}


//그림
room2.picture=room2.createObject("picture","그림1-좌.png")
room2.picture.setWidth(120)
room2.locateObject(room2.picture,500,200)

room2.picture.onClick=function(){
	showImageViewer("청룡상.png")
	printMessage("가운데 중자...? 옆의 캐비닛 비밀번호랑 관련있을것같은데...")
}


//캐비닛
room2.cabinet=room2.createObject("cabinet","캐비닛-오른쪽-닫힘.png")
room2.cabinet.setWidth(150)
room2.locateObject(room2.cabinet,770,230)
room2.cabinet.lock()

room2.cabinet.onClick=function(){
	if(room2.cabinet.isClosed()){
		room2.cabinet.open()
	}
	else if(room2.cabinet.isLocked){
		printMessage("캐비닛 문이 잠겨있다")
	}
}

room2.cabinet.onOpen=function(){
	room2.cabinet.setSprite("캐비닛-오른쪽-열림.png")
	printMessage("손전등이 있다!")	
	room2.handlight.show()
}



//손전등
room2.handlight=room2.createObject("handlight","손전등.png")
room2.handlight.setWidth(50)
room2.locateObject(room2.handlight,743,220)
room2.handlight.hide()

room2.handlight.onClick=function(){
	room2.handlight.pick()
	printMessage("손전등을 얻었다! 이걸로 종이에 쓰인 글자를 볼 수 있을것같은데..")
}



//키패드
room2.keypad2=room2.createObject("keypad2","키패드-좌.png")
room2.keypad2.setWidth(25)
room2.locateObject(room2.keypad2,650,200)

room2.keypad2.onClick=function(){
	showKeypad("number","5555",function(){
		room2.cabinet.unlock()
		printMessage("캐비닛 문이 열렸다.")
 	})
}


//밝기 조절 (천장등))
room2.light=room2.createObject("light","천장등.png")
room2.light.setWidth(150)
room2.locateObject(room2.light,650,50)
room2.setRoomLight(0.5)		
roomLight=1

room2.light.onClick=function(){
	if(roomLight==1){
		room2.setRoomLight(0.5)
		roomLight=0.5
	}
	else{
		room2.setRoomLight(1)
		roomLight=1
	}
}


//종이
room2.paper=room2.createObject("paper","종이.png")
room2.paper.setWidth(200)
room2.locateObject(room2.paper,870,550)
room2.paper.hide()
room2.paper.setItemDescription("뭐가 쓰여져 있는데 손전등이 있으면 볼 수 있을 것 같은데...")


//적혀진 종이
room2.paper_written=room2.createObject("paper_written","상자표시.png")
room2.paper_written.hide()
game.makeCombination(room2.paper,room2.handlight,room2.paper_written);
room2.paper_written.setItemDescription("알 수 없는 것이 적혀있다...")


//카펫
room2.carpet=room2.createObject("carpet","카펫.png")
room2.carpet.setWidth(400)
room2.locateObject(room2.carpet,870,550)

room2.carpet.onClick=function(){
	if(room2.paper.isPicked()){
	}
	else{room2.paper.pick()
	printMessage("종이조각을 얻었다!")
}}



//침대
room2.bed=room2.createObject("bed","침대-1.png")
room2.bed.setWidth(450)
room2.locateObject(room2.bed,1000,400)


//테이블
room2.table=room2.createObject("table","테이블3-2.png")
room2.table.setWidth(350)
room2.locateObject(room2.table,300,610)


//쿠키
room2.cookie=room2.createObject("cookie","음식1-2.png")
room2.cookie.setWidth(90)
room2.locateObject(room2.cookie,320,550)


//리모컨(배터리없음)
room2.remote=room2.createObject("remote","리모컨.png")
room2.remote.setWidth(60)
room2.locateObject(room2.remote,240,535)
room2.remote.setItemDescription("건전지가 없다...")

room2.remote.onClick=function(){
	room2.remote.pick()
	printMessage("리모컨을 얻었다!")
}


//리모컨(배터리있음)
room2.remote_full=room2.createObject("remote_full","리모컨.png")
room2.remote_full.hide()
game.makeCombination(room.battery,room2.remote,room2.remote_full);
room2.remote_full.setItemDescription("리모컨에 전원이 들어왔다!")















//================= Room3 (탈출방) ==============================


//room3생성
room3=game.createRoom("room3","배경-4.png")


//문(이전방)
room3.door4=room3.createObject("door4","문-왼쪽-열림.png")
room3.door4.setWidth(130)
room3.locateObject(room3.door4,258,262)
room3.door4.open()

room3.door4.onClick=function(){
	game.move(room)
}


//문(탈출)
room3.door5 = room3.createObject("door5", "문-오른쪽-닫힘.png") 
room3.door5.setWidth(136) 
room3.locateObject(room3.door5, 890, 265) 
room3.door5.lock() 

room3.door5.onClick = function() { 
	if(room3.door5.isClosed()){ 
		room3.door5.open() 
		} else if (room3.door5.isOpened()){ 
		game.clear() 
	} else if (room3.door5.isLocked()){ 
		printMessage("문이 잠겨있다") 
	}
}

room3.door5.onOpen = function() { 
	room3.door5.setSprite("문-오른쪽-열림.png") 
}



//키패드
room3.keypad3= room3.createObject("keypad3","키패드-우.png")
room3.keypad3.setWidth(30)
room3.locateObject(room3.keypad3,800,240)

room3.keypad3.onClick = function() {
	showKeypad("telephone", "**" , function(){ 
		room3.door5.unlock() 
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}


//옷장1
room3.closet1=room3.createObject("closet1","옷장-2-닫힘.png")
room3.closet1.setWidth(270)
room3.locateObject(room3.closet1,731,248)

room3.closet1.move=true
room3.closet1.onDrag = function(direction){ 
	if(direction == "Left" && room3.closet1.move){ 
		printMessage("옷장을 밀어버렸다!")
		room3.closet1.moveX(-100) 
		room3.closet1.moveY(-31) 
		room3.closet1.move = false 
		}
	}


//옷장2
room3.closet2=room3.createObject("closet2","옷장-2-닫힘.png")
room3.closet2.setWidth(270)
room3.locateObject(room3.closet2,923,279)

room3.closet2.move=true
room3.closet2.onDrag = function(direction){ 
	if(direction == "Right" && room3.closet2.move){ 
		printMessage("옷장을 밀어버렸다!")
		room3.closet2.moveX(200) 
		room3.closet2.moveY(30) 
		room3.closet2.move = false 
		}
	}


//밝기 조절 (천장등))
room3.light2=room3.createObject("light2","천장등.png")
room3.light2.setWidth(150)
room3.locateObject(room3.light2,650,50)
room3.setRoomLight(0.5)		
roomLight2=1

room3.light2.onClick=function(){
	if(roomLight2==1){
		room3.setRoomLight(0.5)
		roomLight2=0.5
	}
	else{
		room3.setRoomLight(1)
		roomLight2=1
	}
}

//돼지코 생성
room3.plug=room3.createObject("plug","돼지코.png")
room3.plug.hide()


//퀴즈1 생성
room3.quiz1=room3.createObject("quiz1","퀴즈1.png")
room3.quiz1.hide()


//퀴즈2 생성
room3.quiz2=room3.createObject("quiz2","퀴즈2.png")
room3.quiz2.hide()



//전화기 생성
room3.tele=room3.createObject("tele","전화기-왼쪽-1.png")
room3.tele.setWidth(40)
room3.locateObject(room3.tele,400,270)

room3.tele.onClick=function(){
	if(game.getHandItem()==room3.plug){
		//showAudioPlayer("chick.wav")
		playSound("흑석로-2.wav")
		printMessage("노래소리가 들리는데...?")		
	}else{
    printMessage("전압이 110v라서 전원을 못 연결하고있다..!")
}}





//1열 상자
room3.box1=room3.createObject("box1","상자2-2-닫힘.png")
room3.box1.setWidth(160)
room3.locateObject(room3.box1,427,487)

room3.box2=room3.createObject("box2","상자2-2-닫힘.png")
room3.box2.setWidth(160)
room3.locateObject(room3.box2,500,500)

room3.box3=room3.createObject("box3","상자2-2-닫힘.png")
room3.box3.setWidth(160)
room3.locateObject(room3.box3,573,513)

room3.box4=room3.createObject("box4","상자2-2-닫힘.png")
room3.box4.setWidth(160)
room3.locateObject(room3.box4,646,526)

room3.box5=room3.createObject("box5","상자2-2-닫힘.png")
room3.box5.setWidth(160)
room3.locateObject(room3.box5,719,539)

room3.box6=room3.createObject("box6","상자2-2-닫힘.png")
room3.box6.setWidth(160)
room3.locateObject(room3.box6,792,552)

room3.box7=room3.createObject("box7","상자2-2-닫힘.png")
room3.box7.setWidth(160)
room3.locateObject(room3.box7,865,565)


//2열 박스
room3.box8=room3.createObject("box8","상자2-2-닫힘.png")
room3.box8.setWidth(160)
room3.locateObject(room3.box8,340,503)

room3.box9=room3.createObject("box9","상자2-2-닫힘.png")
room3.box9.setWidth(160)
room3.locateObject(room3.box9,413,516)
room3.box9.onClick=function(){
	if (room3.box9.isClosed()){
		room3.box9.open()
		if(room3.plug.isPicked()){
		}
		else{room3.plug.pick()
		printMessage("돼지코를 얻었다!")}
	}
}
room3.box9.onOpen=function(){
	room3.box9.setSprite("상자2-2-열림.png")
}

room3.box10=room3.createObject("box10","상자2-2-닫힘.png")
room3.box10.setWidth(160)
room3.locateObject(room3.box10,486,529)
room3.box10.onClick=function(){
	if (room3.box10.isClosed()){
		room3.box10.open()
		if(room3.quiz1.isPicked()){
		}
		else{room3.quiz1.pick()
		printMessage("종이를 얻었다!")}
	}
}
room3.box10.onOpen=function(){
	room3.box10.setSprite("상자2-2-열림.png")
}

room3.box11=room3.createObject("box11","상자2-2-닫힘.png")
room3.box11.setWidth(160)
room3.locateObject(room3.box11,559,542)

room3.box12=room3.createObject("box12","상자2-2-닫힘.png")
room3.box12.setWidth(160)
room3.locateObject(room3.box12,632,555)

room3.box13=room3.createObject("box13","상자2-2-닫힘.png")
room3.box13.setWidth(160)
room3.locateObject(room3.box13,705,568)


//3열박스
room3.box14=room3.createObject("box14","상자2-2-닫힘.png")
room3.box14.setWidth(160)
room3.locateObject(room3.box14,253,519)

room3.box15=room3.createObject("box15","상자2-2-닫힘.png")
room3.box15.setWidth(160)
room3.locateObject(room3.box15,326,532)

room3.box16=room3.createObject("box16","상자2-2-닫힘.png")
room3.box16.setWidth(160)
room3.locateObject(room3.box16,399,545)

room3.box17=room3.createObject("box17","상자2-2-닫힘.png")
room3.box17.setWidth(160)
room3.locateObject(room3.box17,472,558)
room3.box17.onClick=function(){
	if (room3.box17.isClosed()){
		room3.box17.open()
		if(room3.quiz2.isPicked()){
		}
		else{room3.quiz2.pick()
		printMessage("종이를 얻었다!")}
	}
}
room3.box17.onOpen=function(){
	room3.box17.setSprite("상자2-2-열림.png")
}

room3.box18=room3.createObject("box18","상자2-2-닫힘.png")
room3.box18.setWidth(160)
room3.locateObject(room3.box18,545,571)


// 4열 박스
room3.box19=room3.createObject("box19","상자2-2-닫힘.png")
room3.box19.setWidth(160)
room3.locateObject(room3.box19,166,535)

room3.box20=room3.createObject("box20","상자2-2-닫힘.png")
room3.box20.setWidth(160)
room3.locateObject(room3.box20,239,548)

room3.box21=room3.createObject("box21","상자2-2-닫힘.png")
room3.box21.setWidth(160)
room3.locateObject(room3.box21,312,561)

room3.box22=room3.createObject("box22","상자2-2-닫힘.png")
room3.box22.setWidth(160)
room3.locateObject(room3.box22,385,574)



room3.box23=room3.createObject("box23","상자2-2-닫힘.png")
room3.box23.setWidth(160)
room3.locateObject(room3.box23,79,551)

room3.box24=room3.createObject("box24","상자2-2-닫힘.png")
room3.box24.setWidth(160)
room3.locateObject(room3.box24,152,564)

room3.box25=room3.createObject("box25","상자2-2-닫힘.png")
room3.box25.setWidth(160)
room3.locateObject(room3.box25,225,577)













game.start(room) // 게임시작
printMessage("이 교실에서 탈출하자") // 환영 메시지 출력