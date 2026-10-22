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
Q("Why was the project delayed?",["Bad weather","A lack of money","Skilled craftsmen were hard to find"],2,"The delay was mainly due to the difficulty of finding skilled craftsmen.")])

];
