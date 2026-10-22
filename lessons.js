/* ListenUp English — leçons
   Pour ajouter une leçon : copiez un bloc L(...) et changez le contenu.
   Audio facultatif : déposez un fichier "<id>.mp3" (ex. a1-morning.mp3) à la racine du dépôt.
   S'il n'existe pas, l'application utilise la voix du téléphone. */
const Q=(q,choices,answer,why)=>({q,choices,answer,why});
const L=(id,level,icon,title,topic,description,text,questions)=>({id,level,icon,title,topic,description,text,questions});

const lessons=[

/* ================= A1 ================= */
L("a1-morning","A1","☀️","A Busy Morning","Daily routine","Follow Anna through her morning before work.",
"Anna wakes up at seven o'clock every morning. She gets dressed and eats breakfast in the kitchen. She usually has bread, cheese, and a cup of tea. At eight o'clock, she leaves home and takes the bus to work. Today, she is a little late, so she walks quickly to the bus stop.",[
Q("What time does Anna wake up?",["At six o'clock","At seven o'clock","At eight o'clock"],1,"The listening says she wakes up at seven o'clock."),
Q("What does Anna drink for breakfast?",["Coffee","Orange juice","Tea"],2,"She has a cup of tea with her breakfast."),
Q("How does Anna usually go to work?",["By bus","By train","On foot"],0,"She usually takes the bus to work.")]),

L("a1-cafe","A1","☕","At the Café","Food and ordering","Listen to a short conversation between a customer and a waiter.",
"A customer walks into a small café and sits near the window. The waiter comes to the table and asks, 'What would you like?' The customer orders a chicken sandwich and a glass of water. She also asks for a coffee without sugar. After lunch, she pays by card and thanks the waiter.",[
Q("Where does the customer sit?",["Near the door","Near the window","Outside"],1,"She sits near the window."),
Q("What does she order to eat?",["A chicken sandwich","A cheese pizza","A salad"],0,"She orders a chicken sandwich."),
Q("How does she pay?",["With cash","By phone","By card"],2,"The text says she pays by card.")]),

L("a1-family","A1","👨‍👩‍👧","My Family","Family and people","Karim introduces the people he lives with.",
"My name is Karim and I live in Casablanca with my parents and my sister. My father is a teacher and my mother is a nurse. My sister is called Salma. She is eleven years old and she loves drawing. We also have a small grey cat. Her name is Mimi, and she sleeps on my bed every night.",[
Q("What is Karim's father's job?",["He is a nurse","He is a teacher","He is a driver"],1,"Karim says his father is a teacher."),
Q("How old is Salma?",["Nine","Ten","Eleven"],2,"Salma is eleven years old."),
Q("What is the cat's name?",["Mimi","Salma","Lili"],0,"The cat is called Mimi.")]),

L("a1-market","A1","🍅","At the Market","Shopping","Leila does her shopping on Saturday morning.",
"Leila goes to the market on Saturday morning. She buys two kilos of tomatoes, one kilo of oranges, and some fresh mint. The tomatoes cost six dirhams a kilo. She pays with a twenty-dirham note, and the seller gives her some coins back. Then she walks home with two heavy bags.",[
Q("When does Leila go to the market?",["On Friday evening","On Saturday morning","On Sunday afternoon"],1,"She goes to the market on Saturday morning."),
Q("What does she buy with the tomatoes and oranges?",["Fresh mint","Bread","Fish"],0,"She also buys some fresh mint."),
Q("How does she pay?",["With a card","With her phone","With a twenty-dirham note"],2,"She pays with a twenty-dirham note.")]),

L("a1-weather","A1","🌤️","What's the Weather Like?","Weather and clothes","A short weather report for two cities.",
"Today is Monday. In Marrakech, it is sunny, but it is cold in the morning. In Ifrane, it is snowing, so the children are very happy. Yasmine is in Ifrane. She wears a warm coat and a hat. Tomorrow, the weather will be cloudy and windy in both cities.",[
Q("What is the weather like in Ifrane today?",["It is sunny","It is raining","It is snowing"],2,"The report says it is snowing in Ifrane."),
Q("What does Yasmine wear?",["A coat and a hat","A T-shirt","A raincoat"],0,"She wears a warm coat and a hat."),
Q("What will the weather be like tomorrow?",["Hot and sunny","Cloudy and windy","Snowy"],1,"Tomorrow will be cloudy and windy.")]),

L("a1-school","A1","🎒","The First Day at School","School life","Amine starts at a new school.",
"Today is Amine's first day at his new school. He is a little nervous. His teacher, Mrs Haddad, smiles and shows him his desk. He sits next to a boy called Omar. At nine o'clock, they have an English lesson. Amine has a blue bag and new pens, and at the end of the day he feels much happier.",[
Q("How does Amine feel at the beginning?",["Happy","Nervous","Angry"],1,"He is a little nervous."),
Q("What is the teacher's name?",["Mrs Haddad","Mrs Omar","Mrs Amine"],0,"The teacher is Mrs Haddad."),
Q("What lesson do they have at nine o'clock?",["Maths","History","English"],2,"They have an English lesson at nine o'clock.")]),

L("a1-phone","A1","📞","A Phone Call","Plans with friends","Sara calls her friend to make a plan.",
"Sara calls her friend Hana on Thursday afternoon. Hana is at home. Sara asks, 'Do you want to go to the cinema on Friday?' Hana says yes. They decide to go in the evening, at seven o'clock. They will meet in front of the cinema, and Hana will bring the tickets.",[
Q("Who does Sara call?",["Her sister","Her friend Hana","Her teacher"],1,"She calls her friend Hana."),
Q("When do they decide to go to the cinema?",["On Friday evening","On Thursday morning","On Saturday night"],0,"They decide to go on Friday evening."),
Q("Where will they meet?",["At Hana's house","At the bus stop","In front of the cinema"],2,"They will meet in front of the cinema.")]),

L("a1-apartment","A1","🏠","My New Apartment","Home","Youssef describes his new home.",
"Youssef has a new apartment. It is on the second floor of an old building. There is a living room, a bedroom, and a small kitchen. There is no elevator, so he takes the stairs every day. The apartment has a little balcony, and Youssef puts some flowers on it. He loves his new home.",[
Q("On which floor is the apartment?",["The first floor","The second floor","The third floor"],1,"The apartment is on the second floor."),
Q("Is there an elevator in the building?",["No, there isn't","Yes, there is","Yes, but it is broken"],0,"The text says there is no elevator."),
Q("What does Youssef put on the balcony?",["A table","A bicycle","Some flowers"],2,"He puts some flowers on the balcony.")]),

L("a1-hobbies","A1","🏊","Free Time","Hobbies","Nora talks about what she likes to do.",
"Nora likes reading and swimming. Every Wednesday, she goes to the swimming pool with her cousin. On Sunday, she reads a book in the garden. She does not like football because she thinks it is boring. Her brother plays football every weekend, but Nora prefers quiet activities.",[
Q("What does Nora do on Wednesdays?",["She swims","She plays football","She reads in the garden"],0,"On Wednesday she goes to the swimming pool."),
Q("Who goes to the pool with Nora?",["Her brother","Her cousin","Her teacher"],1,"She goes with her cousin."),
Q("What does Nora not like?",["Reading","Swimming","Football"],2,"She does not like football.")]),

L("a1-pharmacy","A1","💊","At the Pharmacy","Health","Ali talks to the pharmacist.",
"Ali has a headache and a sore throat. He feels tired, so he goes to the pharmacy near his house. The pharmacist gives him some tablets and says, 'Drink warm water with honey and rest at home.' Ali thanks her, pays, and goes home. He drinks his warm water and goes to bed early.",[
Q("What problems does Ali have?",["A cold hand and a sore knee","A headache and a sore throat","A broken arm"],1,"He has a headache and a sore throat."),
Q("Where does Ali go?",["To the pharmacy","To the school","To the market"],0,"He goes to the pharmacy near his house."),
Q("What should Ali drink?",["Cold milk","Orange juice","Warm water with honey"],2,"The pharmacist says to drink warm water with honey.")]),

/* ================= A2 ================= */
L("a2-station","A2","🚉","Finding the Train Station","Travel and directions","Sam asks a local person for directions in a new city.",
"Sam is visiting a city for the first time. He needs to catch a train at half past ten, but he cannot find the station. He asks a woman for help. She tells him to go straight along the main street, turn left at the traffic lights, and walk past the bank. The station is opposite the large supermarket. Sam thanks her and checks the time. He has twenty minutes left.",[
Q("Why does Sam need the station?",["To meet a friend","To catch a train","To buy a ticket for a bus"],1,"He needs to catch a train at half past ten."),
Q("Where should Sam turn left?",["At the traffic lights","At the bank","At the supermarket"],0,"He turns left at the traffic lights."),
Q("How much time does Sam have left?",["Ten minutes","Fifteen minutes","Twenty minutes"],2,"He checks the time and has twenty minutes left.")]),

L("a2-rabat","A2","🌿","A Weekend in Rabat","Free time and places","Mina describes a relaxing weekend in Morocco's capital.",
"Last weekend, Mina visited Rabat with two friends. On Saturday morning, they walked along the river and took photos of the old town. After lunch, they visited a museum because the weather was too hot to stay outside. In the evening, they ate grilled fish at a small restaurant near the beach. Mina enjoyed the trip because it was relaxing and not too expensive.",[
Q("Who did Mina travel with?",["Her family","Two friends","Her classmates"],1,"She visited Rabat with two friends."),
Q("Why did they visit a museum?",["It was too hot outside","It was raining","They got lost"],0,"They went inside because the weather was too hot."),
Q("What did they eat in the evening?",["Couscous","Pizza","Grilled fish"],2,"They ate grilled fish near the beach.")]),

L("a2-hotel","A2","🏨","Booking a Hotel Room","Travel and hotels","Mr Benali phones a hotel to book a room.",
"Mr Benali phones a hotel in Fès. He wants a double room for three nights, from Thursday. The receptionist says the room costs six hundred dirhams a night, and breakfast is included. Parking is not included. It costs fifty dirhams extra. Mr Benali thinks the price is fair, so he books the room and gives his name and phone number.",[
Q("How many nights does Mr Benali want?",["Two nights","Three nights","Five nights"],1,"He wants a double room for three nights."),
Q("What is included in the price?",["Breakfast","Parking","Dinner"],0,"Breakfast is included."),
Q("What costs fifty dirhams extra?",["The Wi-Fi","The breakfast","The parking"],2,"Parking is not included and costs fifty dirhams extra.")]),

L("a2-suitcase","A2","🧳","A Lost Suitcase","Airports and problems","Emma's luggage does not arrive.",
"Emma arrives at the airport in Casablanca, but her suitcase does not appear on the belt. She goes to the lost-luggage desk. The employee asks her to describe the suitcase. Emma says it is big and red, with a yellow ribbon on the handle. The employee writes everything down and promises to bring the suitcase to her hotel tomorrow, before noon.",[
Q("What colour is Emma's suitcase?",["Blue","Black","Red"],2,"She says it is big and red."),
Q("Where does Emma go for help?",["To the lost-luggage desk","To the taxi stop","To the café"],0,"She goes to the lost-luggage desk."),
Q("When will they bring the suitcase?",["Tonight at ten","Tomorrow before noon","Next week"],1,"They promise to bring it tomorrow, before noon.")]),

L("a2-soup","A2","🍲","A Cooking Lesson","Food and instructions","Fatima teaches her nephew to make soup.",
"Fatima is teaching her nephew how to make vegetable soup. First, they wash and cut the carrots, the potatoes, and the onions. Then Fatima cooks the onions in a little oil for five minutes. After that, they add the other vegetables and some water. They cook the soup for thirty minutes. At the end, they add salt and pepper and taste it.",[
Q("What do they do first?",["They add salt and pepper","They wash and cut the vegetables","They cook the soup for thirty minutes"],1,"First, they wash and cut the vegetables."),
Q("How long does Fatima cook the onions?",["Five minutes","Fifteen minutes","Thirty minutes"],0,"She cooks them for five minutes."),
Q("When do they add salt and pepper?",["At the beginning","Before the onions","At the end"],2,"They add salt and pepper at the end.")]),

L("a2-gym","A2","🏋️","Joining a Gym","Sport and money","Karim chooses a gym membership.",
"Karim wants to get fit, so he visits a gym near his office. The monthly membership costs two hundred and fifty dirhams. The yearly membership costs two thousand four hundred dirhams. After thinking for a few minutes, he chooses the yearly one because it is cheaper over a year. He plans to go three times a week, on Monday, Wednesday, and Friday evenings.",[
Q("Which membership does Karim choose?",["The monthly one","The yearly one","He does not choose"],1,"He chooses the yearly membership."),
Q("Why does he choose it?",["It is cheaper over a year","It is closer to his house","It has a swimming pool"],0,"He says it is cheaper over a year."),
Q("How often does he plan to go?",["Every day","Once a week","Three times a week"],2,"He plans to go three times a week.")]),

L("a2-interview","A2","🤝","A Job Interview","Work","Sofia goes to her first interview.",
"Sofia has an interview for a job in a bookshop. She arrives ten minutes early and wears a dark jacket. The manager asks her about her experience. Sofia says she worked in a library for two years and that she loves helping people find books. The manager smiles and says she will call Sofia by Friday with her decision.",[
Q("What job does Sofia want?",["Bookshop assistant","Teacher","Librarian"],0,"The interview is for a job in a bookshop."),
Q("Where did Sofia work before?",["In a café","In a library","In a school"],1,"She worked in a library for two years."),
Q("When will the manager call?",["Tomorrow morning","Next month","By Friday"],2,"The manager will call by Friday.")]),

L("a2-concert","A2","🎶","A Summer Concert","Entertainment","A small town prepares its music festival.",
"A small town on the coast has a music festival every summer. Musicians come from many different countries. The concerts take place on the beach and in the old squares of the town. The concerts on the beach are free, but people have to pay to enter the concerts in the theatre. Many tourists arrive early to find a good place near the stage.",[
Q("How often is the festival?",["Every month","Every summer","Every winter"],1,"The festival takes place every summer."),
Q("Which concerts are free?",["The ones on the beach","The ones in the theatre","All of them"],0,"The beach concerts are free."),
Q("Why do many tourists arrive early?",["To buy souvenirs","To meet the musicians","To find a good place near the stage"],2,"They want a good place near the stage.")]),

L("a2-delay","A2","🚌","A Delayed Bus","Transport","Tariq waits for a bus that is late.",
"Tariq is at the bus station. His bus to Tangier must leave at a quarter past eight, but there is a delay because of a technical problem. The driver says the bus will leave in forty minutes. Tariq buys a coffee and a sandwich. Then he calls his sister to tell her that he will be late. The bus finally leaves at five to nine.",[
Q("Where is Tariq going?",["To Fès","To Tangier","To Agadir"],1,"His bus goes to Tangier."),
Q("Why is the bus late?",["Because of a technical problem","Because of the rain","Because of a strike"],0,"The delay is because of a technical problem."),
Q("Who does Tariq call?",["His boss","His friend","His sister"],2,"He calls his sister.")]),

L("a2-neighbour","A2","📦","A New Neighbour","Community","A young woman moves into the next apartment.",
"A young woman moves into the apartment next door. She has many boxes and a big table. Mr Idrissi, an older neighbour, helps her carry the boxes upstairs. She thanks him warmly and invites him for tea on Sunday afternoon. Mr Idrissi accepts happily. On Sunday, he brings a small cake, and they spend a pleasant afternoon talking.",[
Q("Who helps the young woman?",["Mr Idrissi","Her brother","A delivery driver"],0,"Mr Idrissi helps her carry the boxes."),
Q("What does she invite him to?",["Lunch","A party","Tea"],2,"She invites him for tea."),
Q("When is the invitation?",["On Saturday morning","On Sunday afternoon","On Friday evening"],1,"The invitation is for Sunday afternoon.")]),

/* ================= B1 ================= */
L("b1-work","B1","💼","A Small Change at Work","Work and communication","Nadia explains how her team improved its weekly meetings.",
"For months, Nadia's team spent almost an hour in meetings without making many decisions. People often repeated information, and important tasks were forgotten. Nadia suggested sending a short agenda before each meeting and ending with a clear list of actions, names, and deadlines. At first, a few colleagues thought this would create extra work. However, after three weeks, the meetings became shorter and everyone knew what they had to do. The team now uses the same method for project reviews.",[
Q("What was the main problem with the meetings?",["They started too early","They were long and unproductive","Nobody attended them"],1,"They lasted almost an hour without many decisions."),
Q("What did Nadia suggest?",["Cancelling all meetings","Hiring a new manager","Sharing an agenda and action list"],2,"She proposed an agenda and a clear list of actions."),
Q("What happened after three weeks?",["Meetings became shorter","The team stopped working together","Meetings became longer"],0,"The meetings became shorter and responsibilities clearer.")]),

L("b1-skill","B1","📚","Learning a New Skill","Learning and goals","Omar talks about learning to speak English with confidence.",
"Omar used to understand English videos quite well, but he felt nervous whenever he had to speak. Instead of studying grammar for hours, he decided to practise for fifteen minutes every day. He recorded short voice notes, listened to them, and wrote down two things to improve. He also joined an online conversation group once a week. After two months, he was still making mistakes, but he could express his ideas more easily and was no longer afraid of every pause.",[
Q("What made Omar nervous?",["Reading English books","Speaking English","Watching videos"],1,"He understood videos but felt nervous when speaking."),
Q("How did he practise every day?",["For fifteen minutes","For two hours","Only at weekends"],0,"He chose to practise for fifteen minutes daily."),
Q("What changed after two months?",["He never made mistakes","He stopped watching videos","He expressed ideas more easily"],2,"He still made mistakes but spoke more comfortably.")]),

L("b1-remote","B1","🏡","Working from Home","Work and lifestyle","Hind describes her three days a week at home.",
"Hind works from home three days a week. She likes it because she saves two hours of travel every day and can concentrate better. However, she soon noticed some problems. She felt isolated, and it was hard to stop working in the evening. To solve this, she now follows a fixed schedule, finishes at six o'clock, and takes a short walk at lunchtime to clear her mind.",[
Q("What does Hind find difficult?",["Using the computer","Stopping work in the evening","Finding a quiet room"],1,"It was hard for her to stop working in the evening."),
Q("What is one advantage she mentions?",["She saves travel time","She earns more money","She has fewer meetings"],0,"She saves two hours of travel every day."),
Q("How does she organise her days now?",["She works at night","She changes her schedule daily","She follows a fixed schedule"],2,"She follows a fixed schedule and finishes at six.")]),

L("b1-recycling","B1","♻️","A Neighbourhood Recycling Project","Environment","Students organise a collection of plastic bottles.",
"A group of students decided to start a recycling project in their neighbourhood. They placed large boxes in front of shops and asked people to bring empty plastic bottles. In two months, they collected almost three hundred kilos. A company bought the plastic, and the students used the money to buy books for the local library. Several residents say the project has made the street cleaner and has brought neighbours together.",[
Q("What did the students collect?",["Old clothes","Plastic bottles","Used paper"],1,"They collected empty plastic bottles."),
Q("How long did the collection last?",["Two months","Two weeks","Two years"],0,"They collected almost three hundred kilos in two months."),
Q("What did they do with the money?",["They organised a party","They repaired the street","They bought books for the library"],2,"They bought books for the local library.")]),

L("b1-connection","B1","✈️","A Missed Connection","Travel problems","Lina's flight is delayed and she misses the next one.",
"Lina's flight from Madrid was delayed by two hours, so she missed her connecting flight to Montreal. At first, she was very annoyed. The airline apologised and offered her a hotel room and a seat on the next morning's flight. Lina decided to make the best of the situation. She left her luggage at the hotel and spent the evening walking around the city centre, which she had never seen before.",[
Q("Why did Lina miss her connection?",["She arrived at the wrong airport","Her first flight was late","She lost her ticket"],1,"Her flight from Madrid was delayed."),
Q("What did the airline offer her?",["A hotel and a seat on the next morning's flight","A refund only","A taxi to Montreal"],0,"They offered a hotel room and a seat on the next flight."),
Q("How did Lina spend the evening?",["She stayed in her room","She worked on her laptop","She visited the city centre"],2,"She walked around the city centre.")]),

L("b1-sleep","B1","😴","Sleeping Better","Health and habits","Yassine solves his tiredness with simple changes.",
"Yassine felt tired all the time, even after eight hours in bed. His doctor asked about his habits and gave him three pieces of advice. First, stop using the phone one hour before going to bed. Second, avoid coffee after four in the afternoon. Third, go to bed at the same time every night. Yassine found the first change hard, but after two weeks he was sleeping much better and had more energy during the day.",[
Q("What did the doctor say about the phone?",["Use it only in bed","Stop using it an hour before bed","Never use it at home"],1,"He should stop using it one hour before bed."),
Q("When should Yassine avoid coffee?",["After four in the afternoon","Before breakfast","After midnight"],0,"He should avoid coffee after four in the afternoon."),
Q("What was the result after two weeks?",["He felt more tired","He changed his job","He slept much better"],2,"He was sleeping much better and had more energy.")]),

L("b1-shopping","B1","🛍️","A Disappointing Purchase","Shopping and complaints","Rim has a problem with an online order.",
"Rim ordered a jacket online. When it arrived, it was a size too small, and the colour was darker than in the photo. She contacted customer service through the website chat. After waiting fifteen minutes, an agent apologised and offered her either an exchange or a full refund. Rim chose the refund because she no longer trusted the photos on that website and preferred to buy in a real shop.",[
Q("What was wrong with the jacket?",["It was too small and a different colour","It was damaged","It never arrived"],0,"It was a size too small and darker than in the photo."),
Q("How did Rim contact the company?",["By phone","By online chat","By email"],1,"She used the website chat."),
Q("What did she choose?",["An exchange","A discount","A refund"],2,"She chose the full refund.")]),

L("b1-volunteer","B1","🤲","Volunteering at a Food Bank","Community","Adam gives his time every Saturday.",
"Every Saturday morning, Adam volunteers at a food bank in his town. He sorts the donated food and prepares boxes for families who need help. When he started, he thought the work would be boring and that he would only stay for a month. Instead, he now enjoys it, especially meeting the other volunteers. He is planning to invite some of his friends to join the team next month.",[
Q("What does Adam do at the food bank?",["He drives the delivery van","He sorts food and prepares boxes","He cooks meals"],1,"He sorts donated food and prepares boxes."),
Q("What did he think at the beginning?",["That it would be boring","That it would be dangerous","That it would be too expensive"],0,"He thought the work would be boring."),
Q("What is he planning to do next month?",["Change jobs","Stop volunteering","Invite his friends to join"],2,"He plans to invite some friends to join.")]),

L("b1-city","B1","🏙️","Moving to a Big City","Life changes","Samira leaves her village to study in Casablanca.",
"Samira moved from a small village to Casablanca to study at university. The first months were difficult. She was not used to the traffic, the noise, or the high cost of living. Then she found a shared flat with two other students and made friends in her class. Now she says she misses her village on weekends, especially her grandmother's cooking, but she does not want to go back permanently.",[
Q("What was difficult for Samira at first?",["The traffic, the noise and the cost of living","The university courses","The weather"],0,"She was not used to traffic, noise, or the high cost of living."),
Q("Where does she live now?",["With her grandmother","In a shared flat","In a hotel"],1,"She lives in a shared flat with two students."),
Q("How does she feel now?",["She hates the city","She wants to go back at once","She misses the village but wants to stay"],2,"She misses her village but does not want to go back permanently.")]),

L("b1-museum","B1","🏛️","A Surprise at the Museum","Culture and history","A school trip leads to an unexpected discovery.",
"During a school trip to a history museum, the guide showed the class a collection of old coins. One pupil noticed that a coin in the glass case looked very similar to one his grandfather kept at home. The guide was curious and asked him to bring it the next week. Experts examined it and discovered that it was rare. The museum asked the family if it could display the coin for a few months.",[
Q("What did the pupil notice?",["A mistake on a label","A coin similar to his grandfather's","A missing painting"],1,"He saw a coin like the one his grandfather kept."),
Q("What did the guide ask him to do?",["To bring the coin to the museum","To write a report","To call his grandfather"],0,"The guide asked him to bring the coin."),
Q("What did the museum want in the end?",["To buy the coin immediately","To close the exhibition","To display the coin"],2,"The museum asked to display the coin for a few months.")]),

/* ================= B2 ================= */
L("b2-innovation","B2","💡","Innovation in Small Companies","Business and innovation","A business analyst compares small and large firms.",
"Small companies often innovate faster than large ones, mainly because decisions can be taken quickly, with fewer levels of approval. However, their budgets are limited, so they cannot afford many failed experiments. Some of them compensate by building partnerships with universities or research centres, which gives them access to expertise and equipment they could not pay for alone. The analyst concludes that the main challenge is not having ideas, but choosing which ones to pursue.",[
Q("Why do small companies often innovate faster?",["They have larger budgets","They take decisions quickly with less hierarchy","They employ more engineers"],1,"Decisions can be taken quickly, with fewer levels of approval."),
Q("What limits small companies?",["Their budgets are limited","They lack new ideas","They dislike risk by nature"],0,"They cannot afford many failed experiments."),
Q("According to the analyst, what is the main challenge?",["Finding investors","Protecting their ideas","Choosing which ideas to pursue"],2,"The main challenge is choosing which ideas to pursue.")]),

L("b2-attention","B2","📱","Attention and Screens","Technology and society","A researcher discusses a small study on notifications.",
"A researcher describes a small study about concentration. She explains that constantly switching between applications makes it harder to stay focused on a difficult task. In the study, participants turned off their notifications for a week, and most of them reported finishing their tasks more quickly. The researcher, however, warns that the sample was small and that the results should be treated with caution until larger studies confirm them.",[
Q("What makes it harder to concentrate, according to the researcher?",["Working in silence","Switching constantly between applications","Working for long hours"],1,"Constant switching between applications reduces focus."),
Q("What did the participants do for a week?",["They turned off their notifications","They stopped using computers","They worked at night"],0,"They turned off their notifications."),
Q("What is the researcher's warning?",["The study was too expensive","The participants were dishonest","The sample was small, so caution is needed"],2,"She warns that the sample was small.")]),

L("b2-city","B2","🚲","A City Without Cars?","Cities and environment","A council tests a car-free centre.",
"The city council introduced a car-free zone in the town centre as a six-month trial. Shop owners were worried that customers would stop coming. In reality, the number of pedestrians increased, the noise dropped, and several cafés added outdoor seating. Not everyone was satisfied, though: some residents complained that cars were now parked in the neighbouring streets, making it harder for them to find a space near their homes.",[
Q("What were the shop owners afraid of?",["Higher rents","Losing customers","Stricter rules"],1,"They feared customers would stop coming."),
Q("What happened to the number of pedestrians?",["It increased","It stayed the same","It fell"],0,"The number of pedestrians increased."),
Q("What did some residents complain about?",["The noise of the cafés","The price of tickets","Parking in nearby streets"],2,"Cars were now parked in the neighbouring streets.")]),

L("b2-salary","B2","💰","Negotiating a Salary","Career advice","A career coach explains how to prepare.",
"A career coach gives advice on salary negotiation. First, research what similar jobs usually pay, so that your request is realistic. Second, give a range rather than a single figure, because it leaves room for discussion. Finally, if the first answer is negative, stay calm and ask what would be needed for the company to reconsider in the future. The coach insists that a polite question often opens more doors than an immediate argument.",[
Q("What should you do first?",["Accept the first offer","Research what similar jobs pay","Ask for a promotion"],1,"The first step is to research usual salaries."),
Q("Why give a range instead of one figure?",["It leaves room for discussion","It sounds more modest","It is required by law"],0,"A range leaves room for discussion."),
Q("What if the first answer is negative?",["Leave the meeting","Repeat the same request","Stay calm and ask what would change the decision"],2,"Stay calm and ask what would be needed to reconsider.")]),

L("b2-plateau","B2","🧠","Why Adults Reach a Plateau","Language learning","A teacher explains why progress slows down.",
"Many adult learners progress quickly in the first weeks and then seem to stop improving. The teacher calls this a plateau. She explains that, once people can communicate in simple situations, they tend to repeat the same familiar expressions and avoid taking risks. To move forward, she recommends deliberate practice: choose one precise skill, such as understanding fast speech, practise it with feedback, and review your mistakes every week.",[
Q("What usually happens after the first weeks?",["Learners progress even faster","Progress seems to slow down or stop","Learners forget everything"],1,"Many learners seem to stop improving."),
Q("Why does this happen, according to the teacher?",["They repeat familiar expressions and avoid risks","They study too much grammar","They have no free time"],0,"They repeat familiar expressions and avoid taking risks."),
Q("What does she recommend?",["Learning many new words each day","Taking a long break","Practising one precise skill with feedback"],2,"She recommends deliberate practice of one skill with feedback.")]),

L("b2-heritage","B2","🧱","Restoring an Old Medina House","Heritage and architecture","An architect talks about a restoration project.",
"An architect describes the restoration of an old house in the medina. When the workers removed a concrete floor, they discovered the original decorative tiles underneath, which changed the plan completely. Modern materials would have been cheaper, but they would not have lasted as long, so the team chose traditional lime plaster. The project took fourteen months, about twenty per cent longer than planned, mainly because skilled craftsmen were hard to find.",[
Q("What did the workers find under the concrete floor?",["Old coins","The original tiles","A hidden room"],1,"They discovered the original decorative tiles."),
Q("Why did they choose traditional lime plaster?",["Modern materials would not have lasted as long","It was the cheapest option","The owner insisted on it"],0,"Modern materials were cheaper but would not last as long."),
Q("Why was the project delayed?",["Bad weather","A lack of money","Skilled craftsmen were hard to find"],2,"The delay was mainly due to the difficulty of finding skilled craftsmen.")]),

/* ================= A1 (suite) ================= */
L("a1-bakery","A1","🥖","At the Bakery","Shopping","Hamza buys his breakfast before school.",
"Hamza goes to the bakery every morning before school. He buys two loaves of bread and a croissant. The baker, Mr Alami, always says good morning with a big smile. The bread costs three dirhams and the croissant costs four dirhams. Hamza eats the croissant on his way to school.",[
Q("When does Hamza go to the bakery?",["After school","Before school","On Sunday only"],1,"He goes every morning before school."),
Q("What does he buy?",["Two loaves of bread and a croissant","A cake and a juice","Only a croissant"],0,"He buys two loaves of bread and a croissant."),
Q("How much is the croissant?",["Two dirhams","Three dirhams","Four dirhams"],2,"The croissant costs four dirhams.")]),

L("a1-wakeup","A1","⏰","What Time Is It?","Time","Lina does not hear her alarm.",
"It is half past seven in the morning. Lina is still in bed. Her alarm rings, but she does not hear it. At eight o'clock, her mother opens the door and says, 'Wake up! You are late!' Lina jumps out of bed and runs to the bathroom.",[
Q("What time is it at the beginning?",["Half past seven","Eight o'clock","A quarter to seven"],0,"It is half past seven in the morning."),
Q("Who wakes Lina up?",["Her brother","Her mother","Her alarm"],1,"Her mother opens the door and wakes her."),
Q("What does Lina do at the end?",["She goes back to sleep","She eats breakfast","She runs to the bathroom"],2,"She jumps out of bed and runs to the bathroom.")]),

L("a1-dress","A1","👗","Choosing a Dress","Clothes","Maya looks for a dress for a wedding.",
"Maya wants to buy a new dress for her cousin's wedding. In the shop, she sees a green dress and a blue dress. The green one is too long. The blue one is perfect, but it is expensive. The seller offers a ten per cent discount, so Maya buys the blue dress.",[
Q("Why does Maya want a new dress?",["For a birthday","For her cousin's wedding","For a job interview"],1,"The dress is for her cousin's wedding."),
Q("What is wrong with the green dress?",["It is too long","It is too small","It is too dark"],0,"The green dress is too long."),
Q("Which dress does she buy?",["The green one","The red one","The blue one"],2,"She buys the blue dress.")]),

L("a1-bus","A1","🚌","Taking the Bus","Transport","Omar goes to university by bus.",
"Omar waits at the bus stop at seven forty. Bus number twelve arrives five minutes late. The bus is full, so he stands near the door. The ticket costs five dirhams. He gets off at the university, three stops later.",[
Q("Which bus does Omar take?",["Number two","Number twelve","Number twenty"],1,"He takes bus number twelve."),
Q("Why does he stand?",["The bus is full","He likes standing","The seats are dirty"],0,"The bus is full."),
Q("How many stops are there before the university?",["One","Two","Three"],2,"He gets off three stops later.")]),

L("a1-dog","A1","🐕","My Dog","Pets","A boy describes his dog.",
"I have a big brown dog. His name is Max. He is two years old and he loves running in the park. Every morning, I take him for a walk before breakfast. In the afternoon, he sleeps under the table. Max does not like baths, but he loves my little brother.",[
Q("What colour is Max?",["Black","White","Brown"],2,"Max is a big brown dog."),
Q("When does the boy walk the dog?",["Before breakfast","After dinner","At night"],0,"He walks him every morning before breakfast."),
Q("What does Max not like?",["Walks","Baths","Parks"],1,"Max does not like baths.")]),

L("a1-birthday","A1","🎂","A Birthday Party","Celebrations","Ines celebrates her ninth birthday.",
"Today is Ines's birthday. She is nine years old. Her mother makes a chocolate cake, and her friends bring presents. They play games in the garden and sing 'Happy Birthday'. Ines receives a book, a puzzle, and a pink scarf. She says, 'This is the best day of my life!'",[
Q("How old is Ines?",["Seven","Eight","Nine"],2,"Ines is nine years old."),
Q("What kind of cake does her mother make?",["Chocolate","Strawberry","Lemon"],0,"Her mother makes a chocolate cake."),
Q("Which present does Ines receive?",["A bicycle","A pink scarf","A watch"],1,"She receives a book, a puzzle, and a pink scarf.")]),

L("a1-pizza","A1","🍕","Ordering Pizza","Phone calls","Adil orders dinner by phone.",
"Adil calls a pizza restaurant. He orders two large pizzas: one with cheese and one with chicken. He also orders a bottle of orange juice. The address is number fifteen, Hassan II Street. The pizza will arrive in thirty minutes.",[
Q("How many pizzas does Adil order?",["One","Two","Three"],1,"He orders two large pizzas."),
Q("What drink does he order?",["Orange juice","Water","Cola"],0,"He orders a bottle of orange juice."),
Q("When will the pizza arrive?",["In ten minutes","In an hour","In thirty minutes"],2,"It will arrive in thirty minutes.")]),

L("a1-park","A1","🌳","A Walk in the Park","Weekend","Dina spends Sunday with her grandfather.",
"On Sunday, Dina and her grandfather go to the park. The weather is nice, and there are many people. Children play near the lake, and some men play chess under a tree. Dina's grandfather buys her an ice cream. They sit on a bench and watch the ducks.",[
Q("Who goes to the park?",["Dina and her mother","Dina and her grandfather","Dina and her teacher"],1,"Dina goes with her grandfather."),
Q("What do the men do under the tree?",["They play chess","They read newspapers","They sleep"],0,"Some men play chess under a tree."),
Q("What does the grandfather buy?",["A balloon","A drink","An ice cream"],2,"He buys her an ice cream.")]),

L("a1-library","A1","📖","At the Library","School and books","Sami borrows a book about animals.",
"Sami goes to the library after school. He wants a book about animals. The librarian shows him the right shelf. Sami can borrow the book for two weeks. He must bring it back before the twentieth of the month. He signs a card and puts the book in his bag.",[
Q("What kind of book does Sami want?",["A book about animals","A book about cooking","A book about football"],0,"He wants a book about animals."),
Q("How long can he keep the book?",["One week","Two weeks","One month"],1,"He can borrow it for two weeks."),
Q("What does he do before leaving?",["He pays money","He takes a photo","He signs a card"],2,"He signs a card and puts the book in his bag.")]),

L("a1-groceries","A1","🛒","Shopping List","Food","Rania does her shopping at the supermarket.",
"Rania writes a shopping list: milk, eggs, rice, and apples. At the supermarket, she finds everything easily, but the eggs are very expensive today. She buys only six eggs instead of twelve. At the checkout, she pays and puts everything in her own bag.",[
Q("What is expensive today?",["The milk","The eggs","The rice"],1,"The eggs are very expensive today."),
Q("How many eggs does she buy?",["Six","Twelve","Four"],0,"She buys only six eggs."),
Q("Where does she put her shopping?",["In a plastic bag","In a box","In her own bag"],2,"She puts everything in her own bag.")]),

/* ================= A2 (suite) ================= */
L("a2-ticket","A2","🎫","Buying a Train Ticket","Travel","Hamid buys a ticket to Marrakech.",
"At the ticket office, Hamid asks for a return ticket to Marrakech for Friday. The clerk says the train leaves at ten past nine and arrives at one o'clock. A second-class ticket costs two hundred and ten dirhams. Hamid prefers first class because he wants to work on the way, but it is too expensive, so he buys the second-class ticket.",[
Q("Which day does Hamid want to travel?",["Thursday","Saturday","Friday"],2,"He asks for a ticket for Friday."),
Q("What time does the train arrive?",["At one o'clock","At nine o'clock","At ten past nine"],0,"The train arrives at one o'clock."),
Q("Why doesn't he buy a first-class ticket?",["It is sold out","It is too expensive","The clerk refuses"],1,"First class is too expensive for him.")]),

L("a2-flat","A2","🔑","Choosing a Flat","Housing","Sara looks for a flat near her university.",
"Sara is looking for a flat near her university. She visits two flats on the same day. The first is cheap, but it is far from the tram. The second is more expensive, but it is five minutes from the university and has a washing machine. She decides to take the second one because she wants to save time every day.",[
Q("What is the problem with the first flat?",["It is far from the tram","It is too small","It has no kitchen"],0,"The first flat is far from the tram."),
Q("What does the second flat have?",["A garden","A washing machine","A swimming pool"],1,"The second flat has a washing machine."),
Q("Why does Sara choose the second flat?",["It is cheaper","Her friends live nearby","To save time every day"],2,"She wants to save time every day.")]),

L("a2-picnic","A2","🧺","Planning a Picnic","Plans","Four friends prepare a picnic.",
"Four friends plan a picnic for Saturday. Nabil will bring sandwiches, Rim will bring fruit, and Yasser will bring drinks. Salma checks the weather forecast and says it might rain in the afternoon. So they decide to start earlier, at eleven o'clock, and to take a big umbrella just in case.",[
Q("Who will bring the fruit?",["Nabil","Yasser","Rim"],2,"Rim will bring fruit."),
Q("What is Salma worried about?",["Rain in the afternoon","Too much traffic","A lack of food"],0,"She says it might rain in the afternoon."),
Q("What do they decide to do?",["Cancel the picnic","Start earlier, at eleven o'clock","Go on Sunday instead"],1,"They decide to start earlier, at eleven.")]),

L("a2-phone-lost","A2","📱","A Lost Phone","Everyday problems","Karima looks for her phone.",
"Karima cannot find her phone. She searches her bag, her coat, and the kitchen. Finally, she remembers that she used it in the taxi. She calls her number from her brother's phone, and a man answers. He is the taxi driver. He found it on the back seat and agrees to bring it to her office at lunchtime.",[
Q("Where does Karima remember using her phone?",["At the office","In the taxi","In the kitchen"],1,"She remembers using it in the taxi."),
Q("Whose phone does she use to call?",["Her brother's","Her mother's","Her friend's"],0,"She calls from her brother's phone."),
Q("Who answers the call?",["A shop assistant","A policeman","The taxi driver"],2,"The man who answers is the taxi driver.")]),

L("a2-advice","A2","🥗","A Healthy Week","Health","A doctor gives simple advice.",
"Dr Zahra gives her patient some advice for a healthier week. He should walk for thirty minutes every day, drink at least six glasses of water, and eat fruit instead of sweets. She also asks him to come back in two weeks for another check. The patient promises to try, even though he finds it difficult to give up sweets.",[
Q("How long should he walk every day?",["Ten minutes","Thirty minutes","One hour"],1,"He should walk for thirty minutes."),
Q("What should he eat instead of sweets?",["Fruit","Bread","Cheese"],0,"He should eat fruit instead of sweets."),
Q("When should he come back?",["Tomorrow","In a month","In two weeks"],2,"She asks him to come back in two weeks.")]),

L("a2-match","A2","⚽","A Football Match","Sport","The local team plays its rivals.",
"On Saturday evening, the local team played at home against their rivals. The first half was quiet, with no goals. In the second half, the home team scored twice in ten minutes. The visitors scored one goal at the end, but it was too late. The home team won two–one, and the fans celebrated in the streets.",[
Q("Who won the match?",["The home team","The visitors","Nobody, it was a draw"],0,"The home team won two–one."),
Q("How many goals were scored in the first half?",["One","Two","None"],2,"The first half had no goals."),
Q("What was the final score?",["One–one","Two–one","Three–two"],1,"The final score was two–one.")]),

L("a2-washing","A2","🧺","A Broken Washing Machine","Services","Mr Tazi's machine stops working.",
"Mr Tazi's washing machine stopped working on Monday. He phoned the shop where he bought it. The employee said the machine was still under guarantee, so the repair would be free. A technician came on Wednesday morning, replaced a small part, and the machine worked again. Mr Tazi was pleased because he did not have to pay anything.",[
Q("When did the machine stop working?",["On Monday","On Wednesday","On Sunday"],0,"It stopped working on Monday."),
Q("Why was the repair free?",["The technician was a friend","The machine was under guarantee","It was a special offer"],1,"The machine was still under guarantee."),
Q("When did the technician come?",["On Tuesday afternoon","On Monday evening","On Wednesday morning"],2,"The technician came on Wednesday morning.")]),

L("a2-film","A2","🎬","Choosing a Film","Entertainment","Two friends cannot agree on a film.",
"Two friends cannot agree on a film. Lamia wants a comedy because she had a difficult week. Reda prefers a thriller. They look at the times: the comedy starts at six, and the thriller at eight thirty. Lamia suggests seeing the comedy first and having dinner afterwards. Reda agrees, and they say they will see the thriller next weekend.",[
Q("Why does Lamia want a comedy?",["She loves actors","She had a difficult week","It is shorter"],1,"She had a difficult week."),
Q("When does the thriller start?",["At eight thirty","At six","At ten"],0,"The thriller starts at eight thirty."),
Q("What do they decide?",["Comedy now, thriller next weekend","Thriller now, comedy next weekend","Not to go at all"],0,"They see the comedy now and the thriller next weekend.")]),

L("a2-course","A2","🗣️","Joining an English Course","Study","Imane visits a language school.",
"Imane wants to improve her English for her job. She visits a language school and meets the director. The evening course meets twice a week, on Tuesday and Thursday, from six to eight. It costs eight hundred dirhams a month. The director tells her that she must take a short test first. Imane takes the test the same day and starts the following week.",[
Q("Why does Imane want to learn English?",["For her job","For a holiday","For her children"],0,"She wants to improve her English for her job."),
Q("How often does the course meet?",["Every day","Once a week","Twice a week"],2,"It meets twice a week, on Tuesday and Thursday."),
Q("What must she do first?",["Pay a year in advance","Take a short test","Buy a book"],1,"She must take a short test first.")]),

L("a2-sea","A2","🏖️","A Holiday by the Sea","Holidays","The Chraibi family remembers their summer.",
"The Chraibi family spent a week in Agadir last August. They stayed in a small apartment near the beach and went swimming every morning. In the afternoon, the children played volleyball while their parents rested under an umbrella. On the last day, they bought some souvenirs and ate fish by the sea. They want to go back next year.",[
Q("Where did the family go?",["Tangier","Essaouira","Agadir"],2,"They spent a week in Agadir."),
Q("What did the children do in the afternoon?",["They played volleyball","They went shopping","They slept"],0,"The children played volleyball."),
Q("What do they want to do next year?",["Visit another country","Go back to Agadir","Stay at home"],1,"They want to go back next year.")]),

/* ================= B1 (suite) ================= */
L("b1-friend","B1","💬","Keeping in Touch","Relationships","Nawal stays close to a friend abroad.",
"Nawal has a close friend who moved to Canada three years ago. At first, they sent messages every day, but little by little they wrote less and less. Nawal felt sad until she suggested a monthly video call. Now they talk on the first Sunday of every month. They say that having a fixed date helps them stay close, even though there is a time difference of several hours.",[
Q("What happened to their messages over time?",["They wrote less and less","They wrote more and more","They stopped completely"],0,"Little by little they wrote less."),
Q("What did Nawal suggest?",["A visit every year","A monthly video call","A weekly letter"],1,"She suggested a monthly video call."),
Q("What helps them stay close?",["Long messages","Cheap flights","A fixed date"],2,"Having a fixed date helps them stay close.")]),

L("b1-noise","B1","🎧","A Noisy Neighbour","Community","Hassan solves a problem politely.",
"For several weeks, Hassan could not sleep because his upstairs neighbour played loud music late at night. At first, he said nothing. Then he wrote a polite note and left it under the neighbour's door. The next day, the neighbour knocked on his door to apologise. He had no idea that the sound travelled so much. Since then, he uses headphones after ten o'clock.",[
Q("What was Hassan's problem?",["Loud music late at night","A barking dog","A broken lift"],0,"His neighbour played loud music late at night."),
Q("What did Hassan do?",["He called the police","He wrote a polite note","He moved out"],1,"He wrote a polite note and left it under the door."),
Q("What does the neighbour do now?",["He plays music in the morning","He has stopped living there","He uses headphones after ten"],2,"He uses headphones after ten o'clock.")]),

L("b1-saving","B1","🪙","Saving Money","Personal finance","Kenza finds out where her money goes.",
"Kenza wanted to buy a laptop but never had enough money at the end of the month. She decided to write down everything she spent for four weeks. She discovered that she was spending a lot on takeaway coffee and snacks. By making coffee at home and bringing lunch from home, she saved a good amount each month and bought the laptop in the spring.",[
Q("What did Kenza do for four weeks?",["She worked extra hours","She wrote down her spending","She stopped shopping"],1,"She wrote down everything she spent."),
Q("What did she discover?",["She spent a lot on coffee and snacks","She spent too much on clothes","She paid too much rent"],0,"She was spending a lot on takeaway coffee and snacks."),
Q("How did she save money?",["By selling her phone","By taking the bus","By making coffee and lunch at home"],2,"She made coffee at home and brought her lunch.")]),

L("b1-exam","B1","📝","Preparing for an Exam","Study skills","Amina follows a plan instead of panicking.",
"Amina had an important exam in three weeks. Instead of studying all night just before the exam, she made a plan. Every day, she studied for ninety minutes, with short breaks, and on Sundays she tested herself with old exam papers. Two days before the exam, she only reviewed her notes and went to bed early. She felt calm during the exam and got a good mark.",[
Q("How long did she study every day?",["Three hours","Ninety minutes","Thirty minutes"],1,"She studied for ninety minutes a day."),
Q("What did she do on Sundays?",["She rested completely","She visited friends","She tested herself with old exam papers"],2,"She tested herself with old exam papers."),
Q("What did she do two days before the exam?",["She reviewed her notes and slept early","She studied all night","She learned new topics"],0,"She only reviewed her notes and went to bed early.")]),

L("b1-apprentice","B1","🪚","Learning a Trade","Work and careers","Brahim becomes a carpenter.",
"Brahim left school at seventeen and became an apprentice in a carpentry workshop. The first months were hard because he only swept the floor and carried wood. Slowly, the master allowed him to use the tools. After three years, Brahim built his first wardrobe alone. Today, he has his own small workshop and teaches two young apprentices himself.",[
Q("What did Brahim do in the first months?",["He drew plans","He swept the floor and carried wood","He sold furniture"],1,"He only swept the floor and carried wood."),
Q("What happened after three years?",["He built his first wardrobe alone","He changed jobs","He left the workshop"],0,"He built his first wardrobe alone."),
Q("What does he do today?",["He works for his master","He teaches at a university","He has his own workshop and teaches apprentices"],2,"He has his own workshop and teaches two apprentices.")]),

L("b1-misunderstanding","B1","🍝","A Misunderstanding","Communication","A lunch plan goes wrong.",
"Leïla invited a colleague, Karim, to lunch. She wrote, 'See you at twelve at the Italian place', but there are two Italian restaurants in the area. She waited at one, and he waited at the other for forty minutes. They finally called each other, laughed, and agreed on a third place. Since then, they always send the full address.",[
Q("What caused the misunderstanding?",["The wrong time","The wrong day","Two Italian restaurants"],2,"There are two Italian restaurants in the area."),
Q("How long did they wait?",["Forty minutes","Ten minutes","Two hours"],0,"They waited for forty minutes."),
Q("What do they do now?",["They eat at the office","They send the full address","They never meet"],1,"They always send the full address.")]),

L("b1-wallet","B1","👛","Honesty Pays","Values","Yassir finds a wallet.",
"Yassir found a wallet on the pavement with some money and an identity card inside. Instead of keeping it, he took it to the nearest police station. The next day, the owner, an elderly man, came to thank him and offered him a reward. Yassir refused the money, but he accepted a cup of tea. He said that he would have wanted someone to do the same for him.",[
Q("Where did Yassir find the wallet?",["On a bus","On the pavement","In a café"],1,"He found it on the pavement."),
Q("What did he do with it?",["He took it to a police station","He kept it","He left it there"],0,"He took it to the nearest police station."),
Q("What did he accept from the owner?",["Some money","A gift card","A cup of tea"],2,"He refused the money but accepted a cup of tea.")]),

L("b1-bakery-business","B1","🧁","Starting a Small Business","Work and ideas","Zineb turns a hobby into a job.",
"Zineb loved baking and sold cakes to her friends. After a few months, so many people asked for orders that she decided to open a small online shop. She spent a weekend taking photos and writing descriptions. In the first month, she received only five orders, but she kept improving her website. Six months later, she was able to leave her office job.",[
Q("How did Zineb start?",["By selling cakes to her friends","By opening a restaurant","By teaching a course"],0,"She sold cakes to her friends first."),
Q("How many orders did she receive in the first month?",["Fifty","Five","Fifteen"],1,"She received only five orders."),
Q("What happened six months later?",["She closed the shop","She moved abroad","She left her office job"],2,"She was able to leave her office job.")]),

L("b1-streetparty","B1","🎏","A Street Party","Community","A rainy day improves the neighbourhood party.",
"Every June, the residents of a small street organise a party. Each family prepares a dish, and the children decorate the street with paper flags. Last year it rained, so everyone moved to the garage of an apartment building. Surprisingly, it was the best party ever, because people sat closer together and talked more. This year, they will use the garage again on purpose.",[
Q("What does each family do?",["They bring chairs","They prepare a dish","They sing a song"],1,"Each family prepares a dish."),
Q("What happened last year?",["It rained","A road was closed","Nobody came"],0,"Last year it rained."),
Q("Why will they use the garage again?",["It is cheaper","It is bigger","Last year's party there went very well"],2,"It was the best party ever, so they will use it again.")]),

L("b1-grandma","B1","👵","Teaching Grandma","Family and technology","Rachid teaches his grandmother video calls.",
"Rachid decided to teach his grandmother how to use video calls. The first lesson was a disaster: she pressed the wrong button and ended the call twice. He then wrote a short guide with big letters and pictures and stuck it next to the tablet. After a week, she could call the whole family by herself. Now she calls Rachid every evening to ask what he has eaten.",[
Q("What went wrong in the first lesson?",["She pressed the wrong button","The tablet broke","She refused to learn"],0,"She pressed the wrong button and ended the call twice."),
Q("What did Rachid write?",["A letter to the family","A short guide with big letters","A list of phone numbers"],1,"He wrote a short guide with big letters and pictures."),
Q("What does his grandmother do now?",["She asks him to visit","She buys a new tablet","She calls him every evening"],2,"She calls Rachid every evening.")]),

/* ================= B2 (suite) ================= */
L("b2-remote-teams","B2","🌍","Managing Remote Teams","Management","A manager explains how she leads people in three countries.",
"A manager describes how she leads a team spread over three countries. She says the biggest mistake is to measure presence instead of results, so she sets clear goals for each month and lets people choose their working hours. She also holds a short check-in every Monday, but she avoids long meetings, because they reduce the time people have for real work. Trust, she says, is built through clarity, not control.",[
Q("What does she see as the biggest mistake?",["Measuring presence instead of results","Hiring too quickly","Working at weekends"],0,"The biggest mistake is measuring presence instead of results."),
Q("What does she do every Monday?",["A long meeting","A short check-in","A written exam"],1,"She holds a short check-in every Monday."),
Q("How is trust built, according to her?",["Through strict rules","Through frequent meetings","Through clarity, not control"],2,"Trust is built through clarity, not control.")]),

L("b2-risk","B2","🎲","Why Managers Avoid Risk","Decision-making","An economist explains a common bias.",
"An economist explains why managers often avoid risky projects, even when the expected profit is high. People feel the pain of a loss more strongly than the pleasure of an equal gain, so they prefer safe options. He adds that organisations can reduce this bias by rewarding well-prepared attempts, even when they fail, rather than punishing every failure. Otherwise, employees quickly learn to propose only safe ideas.",[
Q("Why do managers avoid risky projects?",["Profits are always low","Losses feel stronger than equal gains","They lack information"],1,"People feel the pain of a loss more strongly than an equal gain."),
Q("How can organisations reduce this bias?",["By rewarding well-prepared attempts, even failed ones","By avoiding all new projects","By hiring more managers"],0,"They can reward well-prepared attempts even when they fail."),
Q("What happens if every failure is punished?",["People work harder","Employees propose only safe ideas","Profits increase"],1,"Employees quickly learn to propose only safe ideas.")]),

L("b2-automation","B2","🤖","Technology and Jobs","Economy and work","A specialist discusses automation and employment.",
"A labour specialist discusses automation. Historically, new technologies have destroyed some jobs but created others, often in different places and requiring different skills. The real difficulty is the transition: workers cannot always retrain quickly, and new jobs may appear in other regions. She therefore argues that training programmes and support for mobility matter as much as the technology itself.",[
Q("What does history show about new technologies?",["They destroy some jobs and create others","They never change employment","They only create jobs"],0,"They have destroyed some jobs but created others."),
Q("What is the real difficulty, according to her?",["The cost of machines","The transition for workers","The lack of ideas"],1,"The difficulty is the transition: retraining and moving."),
Q("What does she argue matters as much as technology?",["Lower taxes","Longer working hours","Training and support for mobility"],2,"Training programmes and support for mobility matter as much.")]),

L("b2-water","B2","💧","Water Scarcity","Environment","A hydrologist explains how water is used.",
"A hydrologist explains that many regions face growing water stress, not only because of lower rainfall, but also because of how water is used. Agriculture takes the largest share, and old irrigation methods lose much water through evaporation. Switching to drip irrigation can reduce consumption considerably, but farmers need financial support to invest in it. Without such help, even good technical solutions remain unused.",[
Q("Which sector uses the largest share of water?",["Industry","Agriculture","Tourism"],1,"Agriculture takes the largest share."),
Q("What is the problem with old irrigation methods?",["They lose water through evaporation","They are too modern","They need too much electricity"],0,"They lose much water through evaporation."),
Q("What do farmers need to adopt drip irrigation?",["More land","New seeds","Financial support"],2,"They need financial support to invest in it.")]),

L("b2-green","B2","🌳","Green Spaces in Cities","Urban planning","An urban planner talks about the value of parks.",
"Urban planners increasingly recognise the value of green spaces. Beyond offering a place to relax, trees reduce summer temperatures in surrounding streets by providing shade and releasing moisture. A survey cited by the speaker suggests that residents living near parks report lower stress. However, he warns that a park can also push property prices up, forcing long-time residents to leave, so planners must think about affordability too.",[
Q("How do trees reduce temperatures?",["By blocking the wind","By providing shade and releasing moisture","By absorbing noise"],1,"They provide shade and release moisture."),
Q("What do residents near parks report?",["Lower stress","More traffic","Higher rents only"],0,"They report lower stress."),
Q("What risk does the speaker mention?",["Parks attract too many birds","Parks reduce safety","Rising prices may force residents to leave"],2,"A park can push property prices up and force long-time residents out.")]),

L("b2-memory","B2","🧠","How We Remember","Psychology and learning","A psychologist explains better ways to study.",
"A psychologist explains why re-reading notes is a weak way to learn. It creates a feeling of familiarity, which we mistake for real knowledge. A better method is retrieval practice: closing the book and trying to recall what you have read, then checking your answers. Spacing the sessions over several days also helps, because the effort of remembering strengthens memory. She admits that it feels harder, but that difficulty is precisely what makes it effective.",[
Q("Why is re-reading a weak method?",["It takes too long","It gives a false feeling of knowing","It is boring"],1,"It creates familiarity, which we mistake for knowledge."),
Q("What is retrieval practice?",["Trying to recall without looking at the notes","Copying the text by hand","Reading aloud"],0,"It means closing the book and trying to recall."),
Q("Why is it effective even though it feels harder?",["It saves time","It is more enjoyable","The effort strengthens memory"],2,"The effort of remembering strengthens memory.")]),

L("b2-failure","B2","📉","Learning from Failure","Entrepreneurship","An entrepreneur talks about her first company.",
"An entrepreneur talks about the failure of her first company. The team had built a product that nobody wanted because they never asked customers what they needed. After losing most of their savings, she decided that every future project would begin with twenty interviews with potential users. Her second company was smaller, but it survived, and she says that failing earlier would have saved her a lot of money.",[
Q("Why did the first company fail?",["It had no money at the start","It built a product nobody wanted","It had too many employees"],1,"They never asked customers what they needed."),
Q("What rule did she adopt afterwards?",["Start with twenty interviews with users","Never hire anyone","Only sell online"],0,"Every project begins with twenty interviews with potential users."),
Q("What does she say would have saved her money?",["Borrowing more","Spending less on offices","Failing earlier"],2,"Failing earlier would have saved her a lot of money.")]),

L("b2-translation","B2","🔤","The Art of Translation","Language and culture","A translator explains why her work is difficult.",
"A translator describes her work as much more than replacing words. Languages organise ideas differently, so a literal translation often sounds unnatural or even changes the meaning. She spends most of her time deciding what the author wanted the reader to feel, and then finds a way to create the same effect in the other language. Humour and poetry are the hardest, she says, because they depend so heavily on sound and culture.",[
Q("Why is literal translation a problem?",["It is too slow","It often sounds unnatural or changes the meaning","It is not allowed"],1,"It often sounds unnatural or changes the meaning."),
Q("What does she spend most of her time on?",["Deciding what the author wanted the reader to feel","Checking spelling","Typing"],0,"She decides what the author wanted the reader to feel."),
Q("Which texts are the hardest to translate?",["Legal texts","News reports","Humour and poetry"],2,"Humour and poetry depend heavily on sound and culture.")]),

L("b2-libraries","B2","📚","Libraries in the Digital Age","Society and information","A librarian explains how libraries have changed.",
"A librarian explains that, contrary to predictions, libraries have not disappeared with the internet. Many have changed their role: they now offer quiet workspaces, free access to digital resources, and training sessions on searching for reliable information. The librarian believes this last function is increasingly important, as people have access to vast amounts of information but often struggle to judge which sources can be trusted.",[
Q("What has happened to libraries?",["They have all closed","They have changed their role","They have become shops"],1,"They have not disappeared; many have changed their role."),
Q("Which function does the librarian find increasingly important?",["Selling books","Offering free coffee","Training people to find reliable information"],2,"Training on searching for reliable information."),
Q("Why is it important?",["People struggle to judge which sources to trust","Books are too expensive","The internet is too slow"],0,"People have vast information but struggle to judge sources.")]),

L("b2-tourism","B2","🧭","Sustainable Tourism","Travel and society","An expert questions how tourism success is measured.",
"A tourism expert argues that visitor numbers alone do not measure success. Some historic towns receive so many tourists that local residents can no longer afford to live there, and the atmosphere visitors came to enjoy gradually disappears. She suggests limiting entry at the busiest sites, spreading visitors across the year, and encouraging them to spend money in local businesses rather than in large international chains.",[
Q("What does she say about visitor numbers?",["They are the best measure of success","They alone do not measure success","They are always falling"],1,"Visitor numbers alone do not measure success."),
Q("What problem do some historic towns face?",["Residents can no longer afford to live there","Not enough hotels","Too much rain"],0,"Residents can no longer afford to live there."),
Q("Where should visitors spend their money, according to her?",["In international chains","At the airport","In local businesses"],2,"She encourages spending in local businesses.")]),

/* ================= C1 ================= */
L("c1-incumbents","C1","🏢","Why Established Firms Struggle to Innovate","Innovation and strategy","A professor explains why leading companies are sometimes overtaken.",
"A professor explains a paradox of innovation. Successful companies listen carefully to their best customers, and this is usually good practice. Yet it can become a trap: those customers ask for improvements to existing products, not for radically different ones, so a promising new technology may look unprofitable at first. By the time it matures, a smaller competitor has already built expertise around it. The professor stresses that these firms are rarely badly managed. They are often following rational procedures that happen to be unsuited to disruption.",[
Q("Why can listening to the best customers become a trap?",["They ask for improvements, not radically new products","They rarely give honest feedback","They are too few to matter"],0,"Customers request improvements to existing products, so new technologies look unprofitable."),
Q("What happens by the time the new technology matures?",["The established firm has already adopted it","A smaller competitor has built expertise in it","Customers lose interest in it"],1,"A smaller competitor has already built expertise around it."),
Q("What is the professor's view of the established firms?",["They are poorly managed","They ignore their customers","They follow rational procedures unsuited to disruption"],2,"They often follow rational procedures that happen to be unsuited to disruption.")]),

L("c1-inflation","C1","📈","Central Banks and Expectations","Economics","An economist discusses how inflation is controlled.",
"An economist argues that controlling inflation depends as much on expectations as on interest rates. If households and firms believe that prices will keep rising, they demand higher wages and raise their own prices, which makes the forecast come true. A credible central bank can break this cycle by convincing people that it will act. However, raising rates too aggressively risks slowing growth and increasing unemployment. The difficulty, he concludes, lies in finding a balance when the data are uncertain and the effects arrive with a delay.",[
Q("According to the economist, what matters as much as interest rates?",["Government spending","Expectations about prices","Exchange rates"],1,"Control of inflation depends as much on expectations as on interest rates."),
Q("Why does a credible central bank help?",["It can convince people that it will act, breaking the cycle","It can print more money","It can fix wages by law"],0,"Credibility convinces people it will act and breaks the cycle."),
Q("What is the main difficulty he identifies?",["Raising rates is illegal","Banks refuse to cooperate","Finding a balance despite uncertain data and delayed effects"],2,"The difficulty is balancing when data are uncertain and effects delayed.")]),

L("c1-nudges","C1","🧭","The Power of Default Options","Behavioural economics","A researcher explains why small design choices matter.",
"A researcher in behavioural economics describes how small design choices can shape decisions. When employees are enrolled in a pension scheme by default and must act to leave it, far more of them end up saving than when they have to sign up themselves. Nothing has been forbidden and the choice remains free, yet behaviour changes substantially. The researcher cautions, however, that such nudges are not neutral: whoever designs the default has influence, so transparency about the purpose is essential if trust is to be maintained.",[
Q("What increases saving in the example?",["Higher salaries","Automatic enrolment that people can leave","Fines for not saving"],1,"Enrolment by default, with the option to leave, leads to more saving."),
Q("Why does the researcher say the choice remains free?",["Nothing is forbidden; people can still opt out","Employees pay no taxes","The scheme is voluntary for companies"],0,"Nothing has been forbidden and the choice remains free."),
Q("What does she caution about nudges?",["They never work in practice","They are too expensive","They are not neutral, so transparency is essential"],2,"Whoever designs the default has influence, so transparency is essential.")]),

L("c1-scenarios","C1","🔭","Strategy Under Uncertainty","Management","A consultant compares forecasting and scenario planning.",
"A consultant argues that forecasting works well when the future resembles the past, but it fails precisely when it matters most: during sudden breaks in trend. She recommends scenario planning instead. Rather than predicting one outcome, managers describe several plausible futures and ask how their strategy would perform in each. The aim is not to guess correctly but to avoid being surprised, by identifying early warning signals and keeping options open. Critics reply that scenarios can become exercises in storytelling, which is why she insists they must be tied to concrete decisions.",[
Q("When does forecasting fail, according to the consultant?",["When data are expensive","When the future resembles the past","During sudden breaks in trend"],2,"Forecasting fails during sudden breaks in trend."),
Q("What is the purpose of scenario planning?",["To avoid being surprised","To predict the exact future","To reduce the number of managers"],0,"The aim is to avoid being surprised, not to guess correctly."),
Q("How does she answer the critics?",["She ignores them","She says scenarios must be tied to concrete decisions","She abandons scenarios"],1,"She insists that scenarios be tied to concrete decisions.")]),

L("c1-commons","C1","🌾","Managing Shared Resources","Economics and society","A lecturer discusses the problem of common resources.",
"A lecturer reviews a classic problem: when a resource such as a fishery or a pasture is open to everyone, each user has an incentive to take more than a sustainable share. The traditional remedies are privatisation or state regulation. However, field studies suggest a third possibility. In many communities, users have agreed on their own rules, monitored each other, and punished violations gradually. The lecturer notes that these arrangements work best when groups are small, boundaries are clear, and the rules are accepted as legitimate by those who must follow them.",[
Q("Why do individuals overuse an open resource?",["They are unaware of the rules","Each has an incentive to take more than a sustainable share","The state forbids sharing"],1,"Each user has an incentive to take more than a sustainable share."),
Q("What third possibility do field studies suggest?",["Communities creating and monitoring their own rules","Higher taxes on users","Abandoning the resource"],0,"Communities agree on their own rules and monitor each other."),
Q("When do these arrangements work best?",["When groups are large and anonymous","When rules are imposed from abroad","When groups are small and rules are seen as legitimate"],2,"They work best with small groups, clear boundaries and accepted rules.")]),

L("c1-supply","C1","🚢","Efficiency or Resilience?","Operations and global trade","An analyst discusses the lessons of supply chain disruptions.",
"For decades, companies reduced costs by holding minimal stocks and relying on a few distant suppliers. This approach is highly efficient in stable conditions, but it leaves little room for error. When disruptions struck several industries at once, many firms discovered how fragile their chains were. The analyst does not suggest abandoning efficiency altogether. Instead, he advises building selective redundancy: extra stock only for critical components, a second supplier for key inputs, and better visibility of the chain. Resilience, he says, is an insurance whose cost must be weighed against the risks.",[
Q("Why were supply chains fragile?",["They relied on minimal stocks and a few distant suppliers","They used too many suppliers","They were too local"],0,"Companies held minimal stocks and relied on a few distant suppliers."),
Q("What does the analyst recommend?",["Abandoning efficiency completely","Selective redundancy for critical items","Doubling all stocks"],1,"He advises selective redundancy for critical components and key inputs."),
Q("How does he describe resilience?",["A waste of money","A temporary fashion","An insurance whose cost must be weighed against the risks"],2,"Resilience is an insurance whose cost must be weighed against risks.")]),

L("c1-leadership","C1","🧩","Leading Without Full Information","Leadership","A senior manager reflects on decision-making.",
"A senior manager reflects on a lesson learned late in her career. Early on, she believed that good leaders wait until they have enough information. Experience taught her that, in most real situations, complete information never arrives, and waiting is itself a decision with costs. She now distinguishes between decisions that are easy to reverse, which should be taken quickly, and those that are hard to undo, which deserve more care. She adds that teams only share bad news early if they feel safe doing so, and that this safety is created by how leaders react to mistakes.",[
Q("What did she learn about complete information?",["It always arrives eventually","It rarely arrives, and waiting has costs","It is unnecessary"],1,"Complete information never arrives, and waiting is itself a decision with costs."),
Q("How does she treat easily reversible decisions?",["She takes them quickly","She delegates them","She avoids them"],0,"Easy-to-reverse decisions should be taken quickly."),
Q("What creates the safety that lets teams share bad news early?",["Detailed procedures","Frequent audits","How leaders react to mistakes"],2,"Safety is created by how leaders react to mistakes.")]),

L("c1-microfinance","C1","🤝","Small Loans, Big Expectations","Development economics","A researcher assesses the evidence on microfinance.",
"When microfinance expanded, many hoped that small loans would lift large numbers of people out of poverty. Rigorous evaluations have since given a more nuanced picture. On average, the effects on household income appear modest, and some borrowers struggle with repayment. However, the researcher emphasises that averages hide differences: some entrepreneurs with real opportunities do benefit, while others use loans mainly to smooth consumption. She concludes that microfinance is a useful tool for certain people, not a universal solution, and that expectations should match the evidence.",[
Q("What do rigorous evaluations show about average income effects?",["They are very large","They appear modest","They are always negative"],1,"The effects on household income appear modest on average."),
Q("Why does the researcher say averages can mislead?",["They hide differences between borrowers","They are always inaccurate","They ignore interest rates"],0,"Averages hide differences: some entrepreneurs benefit, others smooth consumption."),
Q("What is her conclusion?",["Microfinance should be abolished","Microfinance solves poverty","It is a useful tool for some, not a universal solution"],2,"It is useful for certain people, not universal.")]),

L("c1-algorithms","C1","⚖️","Accountability and Algorithms","Ethics and technology","A speaker discusses automated decisions in organisations.",
"As organisations rely on algorithms to rank candidates or assess risk, a speaker raises a question of accountability. Systems trained on past decisions may reproduce past biases while appearing objective. She argues that organisations should be able to explain, in plain language, why a decision was made and should offer a way to challenge it. This does not mean rejecting the technology, she insists. It means that a human being or an institution must remain responsible, since a tool cannot answer for its consequences.",[
Q("Why might algorithms be problematic?",["They may reproduce past biases while seeming objective","They are always slower than humans","They cannot process data"],0,"They may reproduce past biases while appearing objective."),
Q("What should organisations be able to do?",["Keep the system secret","Explain decisions and allow them to be challenged","Replace all managers"],1,"They should explain decisions in plain language and allow challenges."),
Q("Who must remain responsible, according to her?",["The software supplier","The algorithm itself","A human being or an institution"],2,"A tool cannot answer for its consequences, so humans must remain responsible.")]),

L("c1-productivity","C1","🏭","The Productivity Puzzle","Economics","An economist explains why new technology takes time to pay off.",
"Economists have long noted that new technologies rarely raise productivity immediately. When electricity first arrived in factories, output did not jump at once, because managers simply replaced steam engines with electric motors and kept the old layout. Gains appeared only when factories were redesigned around the new possibilities. The speaker draws a lesson for today: investments in equipment must be accompanied by changes in organisation, skills, and processes. Without these complementary changes, the technology is available but its benefits remain largely unrealised.",[
Q("Why did early electrification not raise output at once?",["Electricity was too expensive","Factories kept the old layout","Workers refused to use motors"],1,"Managers replaced engines but kept the old factory layout."),
Q("When did the gains appear?",["When factories were redesigned around the new technology","When prices fell","When workers worked longer hours"],0,"Gains appeared when factories were redesigned."),
Q("What lesson does the speaker draw for today?",["Technology alone is enough","Investment should be avoided","Equipment must be matched by changes in organisation and skills"],2,"Complementary changes in organisation, skills and processes are needed.")]),

L("c1-multilingual","C1","🌐","Living in Several Languages","Language and cognition","A linguist discusses what multilingualism does to the mind.",
"A linguist reviews the debate on whether speaking several languages improves general thinking skills. Early studies reported clear advantages in attention and flexibility, but later attempts to reproduce them gave mixed results, and researchers now disagree. What is more firmly established is that multilingual people develop a sensitivity to context: they switch languages according to the listener and the situation. The linguist advises caution with strong claims, but adds that the practical, social, and cultural benefits of knowing several languages are not in doubt.",[
Q("What do later studies show about early claims of cognitive advantages?",["They confirmed them completely","The results were mixed","They disproved all benefits"],1,"Later attempts to reproduce them gave mixed results."),
Q("What is more firmly established?",["Sensitivity to context and switching according to the listener","Higher intelligence in general","Faster reading speed"],0,"Multilingual people switch languages according to listener and situation."),
Q("What does the linguist advise?",["Avoiding second languages","Ignoring all research","Caution with strong claims, while recognising practical and cultural benefits"],2,"She advises caution but notes the practical, social, and cultural benefits.")]),

L("c1-replication","C1","🔬","Can Research Be Trusted?","Research methods","A scientist discusses reproducibility.",
"A scientist explains why some published findings fail when other teams try to repeat them. Journals tend to favour striking results, and researchers have flexibility in how they analyse data, so a chance pattern can end up looking convincing. To address this, some journals now accept studies on the basis of their question and method, before results are known, and researchers register their analysis plans in advance. The scientist believes this does not make research slower, only more honest: a negative result becomes useful information rather than a failure to be hidden.",[
Q("Why do some published findings fail to be reproduced?",["Journals prefer striking results and analysis is flexible","Scientists work too slowly","Data are always forged"],0,"Journals favour striking results and researchers have flexibility in analysis."),
Q("What do some journals now do?",["Reject all negative results","Accept studies based on question and method before results are known","Publish without review"],1,"They accept studies on question and method before results are known."),
Q("How does the scientist view negative results in this system?",["As failures to be hidden","As proof of poor method","As useful information"],2,"A negative result becomes useful information.")]),

/* ================= C2 ================= */
L("c2-path","C2","🏛️","Why Institutions Resist Change","Institutions and history","A historian explains path dependence.",
"A historian of institutions argues that societies are shaped less by deliberate design than by accumulated accident. Once a particular arrangement is in place, such as a tax system or a way of settling disputes, people invest in it, build careers around it, and form expectations that make change costly, even when everyone agrees it is inefficient. The result is path dependence: outcomes that would be hard to predict from first principles but that look inevitable in retrospect. She warns reformers against assuming that a successful institution can simply be transplanted, since it works only in combination with the habits and trust that surround it.",[
Q("What does she mean by path dependence?",["Institutions always improve over time","Past arrangements constrain present options, even inefficient ones","Societies copy their neighbours"],1,"Earlier arrangements make change costly even when they are inefficient."),
Q("Why is it costly to change an established arrangement?",["People have invested in it and built expectations around it","Laws forbid any reform","Nobody understands how it works"],0,"People invest in it, build careers around it and form expectations."),
Q("What is her warning to reformers?",["They should act faster","They should avoid all reform","A successful institution cannot simply be transplanted"],2,"It works only with the habits and trust that surround it.")]),

L("c2-experts","C2","🎓","The Limits of Expertise","Philosophy of science","A philosopher distinguishes technical questions from questions of value.",
"A philosopher of science defends expertise while rejecting the idea that experts should simply be obeyed. Expert knowledge is valuable precisely because it has been tested by specialised communities, yet it is also narrow: an economist can estimate the effect of a policy on prices without being qualified to decide whether that price is worth paying. The danger arises when technical questions and questions of value are blurred, allowing a political choice to be presented as a scientific necessity. Good institutions, he suggests, make that boundary visible.",[
Q("In what sense is expert knowledge narrow?",["It can estimate effects but not decide what is worth paying","It is always outdated","It cannot be tested"],0,"An economist can estimate effects without being qualified to judge the value of the price."),
Q("What danger does he identify?",["Experts disagreeing among themselves","A political choice presented as a scientific necessity","Public distrust of all science"],1,"Technical and value questions are blurred."),
Q("What do good institutions do, according to him?",["Replace experts with citizens","Hide disagreements","Make the boundary visible"],2,"They make the boundary between technical and value questions visible.")]),

L("c2-metaphor","C2","🔥","Metaphors in Public Debate","Language and politics","A linguist shows how images shape decisions.",
"A linguist examines how the metaphors used in public debate quietly shape the solutions that people consider. If inflation is described as a fire, the natural response is to extinguish it quickly; if it is described as an illness, patience and treatment seem more appropriate. Neither image is false, but each highlights some features and hides others. She does not conclude that metaphors should be eliminated, which she considers impossible. Instead, speakers should become aware of them and, where possible, test a decision against an alternative image.",[
Q("What is her main claim?",["Metaphors shape which solutions people consider","Metaphors are always misleading","Debates should avoid inflation"],0,"Metaphors quietly shape the solutions that people consider."),
Q("What does she think about eliminating metaphors?",["It is desirable and easy","It is impossible","It is already happening"],1,"She considers it impossible."),
Q("What does she recommend?",["Choosing the most dramatic image","Using only technical vocabulary","Being aware of metaphors and testing against an alternative image"],2,"Speakers should become aware of them and test decisions against another image.")]),

L("c2-measure","C2","🎯","When Measures Become Targets","Management and incentives","An economist describes a common organisational trap.",
"An economist warns about a recurring problem in organisations: once a measure is used to reward people, they begin to optimise the measure rather than the thing it was meant to represent. Schools judged by exam results may teach to the test, and hospitals judged by waiting times may reclassify patients. The behaviour is rarely dishonest in any simple sense; it is a rational response to incentives. The remedy is not to abandon measurement but to use several imperfect indicators, to change them periodically, and to preserve room for professional judgement.",[
Q("What happens when a measure is used to reward people?",["They optimise the measure itself","They stop caring about quality","They report more honestly"],0,"They optimise the measure rather than what it represents."),
Q("How does the economist characterise this behaviour?",["As deliberate fraud","As a rational response to incentives","As a sign of incompetence"],1,"It is rarely simple dishonesty but a rational response to incentives."),
Q("What remedy does he propose?",["Abandoning all measurement","Using one perfect indicator","Several imperfect indicators, changed periodically, with room for judgement"],2,"Use several imperfect indicators and preserve professional judgement.")]),

L("c2-cba","C2","⚖️","The Appeal and Limits of Cost-Benefit Analysis","Public policy","A speaker takes a middle path in a classic debate.",
"Cost-benefit analysis is attractive because it forces trade-offs into the open, and a decision that cannot be justified in any common unit is often one that no one is willing to defend. Critics reply that converting health, heritage, or ecosystems into money gives a false sense of precision and gives disproportionate weight to whatever is easiest to measure. The speaker takes a middle path: such analysis should inform deliberation rather than replace it, and its assumptions, especially the discount rate applied to the distant future, should be stated as plainly as its conclusions.",[
Q("Why is cost-benefit analysis attractive?",["It forces trade-offs into the open","It is always accurate","It is cheap to carry out"],0,"It forces trade-offs into the open."),
Q("What is the critics' objection?",["It takes too long","It gives false precision and overweights what is easiest to measure","It ignores all costs"],1,"Critics point to false precision and the weight given to what is easy to measure."),
Q("What is the speaker's position?",["It should replace political debate","It should be abandoned","It should inform deliberation, with assumptions stated openly"],2,"Analysis should inform rather than replace deliberation, and assumptions must be stated.")]),

L("c2-tacit","C2","🧵","Knowledge That Cannot Be Written Down","Innovation and knowledge","A speaker explains why innovations spread slowly.",
"Why do innovations spread more slowly than their inventors expect? One answer lies in tacit knowledge: the skills that practitioners possess but cannot fully write down. A manual can describe a technique, yet only practice alongside someone experienced reveals the countless small adjustments that make it work. This explains why firms often hire people rather than buy documents, and why a technology transferred without the people who understand it may fail in its new setting. The speaker concludes that knowledge is less like a parcel to be delivered than a capacity to be grown.",[
Q("What is tacit knowledge?",["Skills that cannot be fully written down","Secret company information","Knowledge held only by managers"],0,"It consists of skills that practitioners possess but cannot fully write down."),
Q("Why do firms often hire people rather than buy documents?",["People are cheaper","Documents are illegal to sell","People carry the know-how that documents lack"],2,"The small adjustments that make a technique work are revealed through practice."),
Q("How does the speaker describe knowledge?",["As a parcel to be delivered","As a capacity to be grown","As a fixed asset"],1,"Knowledge is less like a parcel than a capacity to be grown.")]),

L("c2-hindsight","C2","🕰️","The Trap of Hindsight","History and method","A historian explains how to write about the past.",
"Historians are wary of hindsight, the tendency to treat the outcome of events as if it had been inevitable. Once we know how a crisis ended, earlier hesitations look foolish and the warning signs look obvious. Yet the people involved faced a crowd of conflicting signals and could not know which would matter. A responsible narrative, the speaker argues, restores that uncertainty: it shows what contemporaries knew, what they feared, and which alternatives seemed credible at the time. This does not excuse their mistakes, but it makes them intelligible.",[
Q("What is hindsight, as described here?",["Remembering events accurately","Treating the outcome as if it had been inevitable","Predicting the future"],1,"It is the tendency to see the outcome as inevitable."),
Q("What does a responsible narrative do?",["It restores the uncertainty that people faced","It lists only the successes","It blames individuals"],0,"It shows what contemporaries knew, feared, and considered credible."),
Q("Does this approach excuse past mistakes?",["Yes, completely","Yes, in most cases","No, but it makes them intelligible"],2,"It does not excuse them but makes them intelligible.")]),

L("c2-culture","C2","🗝️","Written Rules and Unwritten Norms","Organisations","A speaker argues that culture outweighs policy.",
"Managers often assume that organisations are governed by their written rules. Observers of real workplaces tend to disagree: what employees actually do is shaped by unwritten norms about what is rewarded, what is tolerated, and what is better left unsaid. When a formal policy contradicts these norms, the norms usually win. The practical implication, the speaker says, is uncomfortable for reformers: changing the rulebook is the easy part. The harder task is to alter the signals that people read in the behaviour of their superiors, because those signals define how things are really done.",[
Q("What shapes employees' behaviour most, according to the speaker?",["Written rules","Unwritten norms","Salary levels"],1,"Behaviour is shaped by unwritten norms about what is rewarded or tolerated."),
Q("What usually happens when a policy contradicts the norms?",["The norms usually win","The policy is quickly adopted","Employees leave"],0,"When a policy contradicts the norms, the norms usually win."),
Q("What is described as the harder task for reformers?",["Writing new rules","Hiring consultants","Changing the signals sent by superiors' behaviour"],2,"People read signals in the behaviour of their superiors.")]),

L("c2-gdp","C2","📊","Beyond GDP","Economics and measurement","An economist reflects on what GDP does and does not measure.",
"An economist reflects on the limits of gross domestic product as a measure of progress. GDP counts the value of market transactions, so it rises when money is spent on cleaning a polluted river but ignores the unpaid care provided within families. It was designed to measure economic activity, not wellbeing, and the confusion between the two is more recent than the statistic itself. The speaker proposes not to discard GDP but to supplement it with indicators on health, education, the environment, and inequality, accepting that no single number will satisfy everyone.",[
Q("What does GDP count?",["The value of market transactions","Everyone's happiness","Unpaid work at home"],0,"It counts the value of market transactions."),
Q("What was GDP designed to measure?",["Wellbeing","Economic activity","Social equality"],1,"It was designed to measure economic activity, not wellbeing."),
Q("What does the speaker propose?",["Replacing GDP with one new number","Ignoring GDP completely","Supplementing GDP with other indicators"],2,"He proposes to supplement GDP with indicators on health, education, environment and inequality.")]),

L("c2-borrowing","C2","🔤","How Languages Borrow","Linguistics","A lexicographer discusses borrowed words.",
"Languages have always borrowed words, and purists who fear contamination tend to overlook the fact that most of the vocabulary they defend was itself imported at some point. Borrowing usually fills a gap: a new object or idea arrives together with its name. What is more interesting, the speaker suggests, is how borrowed words are transformed. They acquire new spellings, new meanings, and sometimes meanings that the source language would not recognise. In this sense, a borrowed word becomes truly part of a language only when its speakers feel free to change it.",[
Q("What do purists tend to overlook?",["That most of their vocabulary was itself once imported","That borrowing is recent","That words never change"],0,"Much of the vocabulary they defend was imported at some point."),
Q("Why do languages usually borrow words?",["To sound more modern","To fill a gap when something new arrives","To please foreigners"],1,"A new object or idea arrives together with its name."),
Q("When does a borrowed word truly become part of a language?",["When dictionaries list it","When it is used only in writing","When speakers feel free to change it"],2,"It becomes part of the language when its speakers feel free to change it.")]),

L("c2-trust","C2","🤝","Trust When Contracts Run Out","Business relationships","A researcher explains cooperation between firms.",
"Negotiation is often portrayed as a contest in which each side tries to extract as much as possible. Research on long-term relationships between firms suggests a different logic. When parties expect to deal with each other repeatedly, behaving opportunistically today damages reputation tomorrow, so cooperation becomes the rational strategy. Yet the speaker notes a paradox: trust is most valuable when circumstances change unexpectedly, which is exactly when written contracts are least able to anticipate what is needed. Informal understanding then does the work that no clause could.",[
Q("Why is cooperation rational in repeated dealings?",["Contracts forbid anything else","Opportunism today damages reputation tomorrow","Firms dislike negotiation"],1,"Behaving opportunistically damages reputation for future dealings."),
Q("What paradox does the speaker mention?",["Trust matters most when contracts cannot anticipate events","Contracts are never used","Trust is cheap but useless"],0,"Trust is most valuable exactly when written contracts are least able to anticipate."),
Q("What does informal understanding do?",["It replaces all negotiation","It makes firms less competitive","It does the work that no clause could"],2,"Informal understanding does the work that no clause could.")]),

L("c2-progress","C2","🧭","Is Progress a Straight Line?","Political thought","A political theorist questions a common assumption.",
"Public discussion often assumes that moral and social progress is a steady upward line. The speaker, a political theorist, doubts this. Rights that were won through long struggle can be eroded when people forget why they were needed, and institutions that function well may do so partly because the memory of past failures remains alive. This does not make her pessimistic. She argues instead that progress should be understood as an achievement that requires maintenance, not as a law of history that operates without us.",[
Q("What does the speaker doubt?",["That rights matter","That progress is a steady upward line","That institutions exist"],1,"She doubts that moral and social progress is a steady upward line."),
Q("Why can hard-won rights be eroded?",["People forget why they were needed","They are too expensive","Courts abolish them at once"],0,"They can erode when people forget why they were needed."),
Q("How does she understand progress?",["As an automatic law of history","As an illusion","As an achievement that requires maintenance"],2,"Progress is an achievement that requires maintenance.")])

];
