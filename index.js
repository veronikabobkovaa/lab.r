// 4 лабораторная работа
// const schemaBuilder = lf.schema.create("book shop_db", 1);

// schemaBuilder
// .createTable("sections")
// .addColumn("numberSections", lf.Type.INTEGER)
// .addColumn("nameSections", lf.Type.STRING)
// .addColumn("ageLimit", lf.Type.INTEGER)
// .addPrimaryKey(["numberSections"]); 

// schemaBuilder
//   .createTable("books")
//   .addColumn("book", lf.Type.STRING)
//   .addColumn("author", lf.Type.STRING)
//   .addColumn("placeOfPublication", lf.Type.STRING)
//   .addColumn("publishingHouse", lf.Type.STRING)
//   .addColumn("publicationDate", lf.Type.DATE_TIME)
//   .addColumn("price", lf.Type.INTEGER)
//   .addColumn("numberOfCopies", lf.Type.INTEGER)
//   .addColumn("pages", lf.Type.INTEGER)
//   .addColumn("purchaseDate", lf.Type.DATE_TIME)
//   .addColumn("note", lf.Type.BOOLEAN)
//   .addColumn("numberSections", lf.Type.INTEGER)
//   .addPrimaryKey(["book"])
//   .addForeignKey("fk_booksSections", {
//     local: "numberSections",
//     ref: "sections.numberSections",
//   });

//   schemaBuilder
//   .createTable("quotes")
//   .addColumn("book", lf.Type.STRING)
//   .addColumn("page", lf.Type.INTEGER)
//   .addColumn("quote", lf.Type.STRING)
//   .addPrimaryKey(["quote"])
//   .addForeignKey("fk_books", {
//     local: "book",
//     ref: "books.book",
//   });

//   schemaBuilder.connect().then((db) => {
//     console.log(db.getSchema());
//     });

// 5 ЛАБОРАТОРНАЯ РАБОТА
// const database = await buildSchema();

// await saveSections({
//   numberSections: 5,
//   nameSections: "Научная литература",
//   ageLimit: 0,
// });

// const sections = {
//   numberSections: 3,
//   nameSections: "Психология",
//   ageLimit: 16,
// }
// await  saveSections(sections);

// await saveSections({
//   numberSections: 1,
//   nameSections: "Графический роман",
//   ageLimit: 18,
// });

// await saveBooks({
//   book: "Грокаем алгоритмы" ,
//   author: "Адитья Бхаргава",
//   placeOfPublication: "Санкт-Петерберг",
//   publishingHouse: "Дом печати - ВЯТКА",
//   publicationDate: new Date("2022-06-01"),
//   price: 889,
//   numberOfCopies: 10,
//   pages: 274,
//   purchaseDate: new Date("2023-01-01"),
//   note: false,
//   numberSections: 5, 
// })

// await saveBooks({
//   book:"Искусство любить" ,
//   author: "Эрих Фромм",
//   placeOfPublication: "Москва",
//   publishingHouse: "Издательство АСТ",
//   publicationDate: new Date("2021-03-05"),
//   price: 499,
//   numberOfCopies: 13,
//   pages: 224,
//   purchaseDate: new Date("2021-04-05"),
//   note: true,
//   numberSections: 3,
// });

// await saveBooks({
//   book:"Девушка у моря" ,
//   author: "Инио Асано",
//   placeOfPublication: "Екатеринбург",
//   publishingHouse: "Фабрика комиксов",
//   publicationDate: new Date("2018-06-06"),
//   price: 1300,
//   numberOfCopies: 3,
//   pages: 193,
//   purchaseDate: new Date("2021-01-01"),
//   note: true,
//   numberSections: 1,
// });

// const quotes = {
//   book:"Грокаем алгоритмы" ,
//   page: 10,
//   quote: "'Грокнуть' означает понять так полно, что наблюдатель становится частью объекта наблюдения...",  
// };

// await saveQuotes(quotes);

// await saveQuotes({
//   book:"Искусство любить" ,
//   page: 176,
//   quote: "Современный человек превратил себя в товар; он ощущает свою внутреннюю энергию как вклад, благодаря которому он получит наивысший доход с учетом своего положения и ситуации на личностном рынке",
// });


// await saveQuotes({
//   book:"Девушка у моря" ,
//   page: 88,
//   quote: "Обычно я никогда не находила то, что искала. Но, может быть я с самого начала и не надеялась что-то найти?",
// });


// // сохранение секции в бд
//  function saveSections(sections) {
//   const sectionsTable = database.getSchema().table("sections");
//   const row = sectionsTable.createRow(sections);

//   return database.insertOrReplace().into(sectionsTable).values([row]).exec();
// }

// // сохранение книг в бд
//  function saveBooks(books) {
//   const booksTable = database.getSchema().table("books");
//   const row = booksTable.createRow(books);

//   return database.insertOrReplace().into(booksTable).values([row]).exec();
// }

// // сохранение цитат в бд
// function saveQuotes(quotes) {
//   const quotesTable = database.getSchema().table("quotes");
//   const row = quotesTable.createRow(quotes);

//   return database.insertOrReplace().into(quotesTable).values([row]).exec();
// }

// //почему лишние цитаты остались? ??????????
// await printAllSections();
// await printAllBooks();
// await printAllQuotes();
// console.log("=============================================================== КОНЕЦ 1 ЗАДАНИЯ ==========================================================================");



// await updateBookByName({
//   book:"Девушка у моря" ,
//   author: "Инио Асано",
//   placeOfPublication: "Москва",
//   publishingHouse: "Азбука-Аттикус",
//   publicationDate: new Date("2021-09-01"),
//   price: 1569,
//   numberOfCopies: 13,
//   pages: 193,
//   purchaseDate: new Date("2023-01-27"),
//   note: true,
//   numberSections: 1,

// })

// await updateBookPriceByNameBind('Девушка у моря', 1700);
// await printAllBooks();


// // обновление данных с параметризацией
// function updateBookPriceByNameBind(booksName, newPrice) {
//   const booksTable = database.getSchema().table("books");

//   const query = database
//     .update(booksTable)
//     .set(booksTable.price, lf.bind(0))
//     .where(booksTable.book.eq(lf.bind(1)));

//   return query.bind([newPrice, booksName]).exec();
// }
// // изменяет цену первой книги, а не той, которую вписала, почему???


// // обновление данных книг без параметризации
//  function updateBookByName(books) {
//   const booksTable = database.getSchema().table("books");

//   return database
//     .update(booksTable)
//     .set(booksTable.author, books.author)
//     .set(booksTable.placeOfPublication,books.placeOfPublication)
//     .set(booksTable.publishingHouse, books.publishingHouse)
//     .set(booksTable. publicationDate, books. publicationDate)
//     .set(booksTable.price, books.price)
//     .set(booksTable.numberOfCopies, books.numberOfCopies)
//     .set(booksTable.pages, books.pages)
//     .set(booksTable. purchaseDate, books. purchaseDate)
//     .set(booksTable.note, books.note)
//     .set(booksTable.numberSections, books.numberSections)
//     .where(booksTable.book.eq(books.book)) // где books.book равен переданному через параметр функции book
//     .exec();
// }

// console.log ('=============================================================== КОНЕЦ 2 ЗАДАНИЯ ====================================================================');

// await printAllQuotes();
// await deleteQuotesByPage(88);
// await printAllQuotes();

// await deleteQuotesByPageBind(10);
// await printAllQuotes();

// // удаление без параметризации
// function deleteQuotesByPage(quotesPage) {
//   const quotesTable = database.getSchema().table("quotes");

//   return database
//     .delete()
//     .from(quotesTable)
//     .where(quotesTable.page.eq(quotesPage))
//     .exec();
// }


// // удаление с параметризацией
// function deleteQuotesByPageBind(quotesPage) {
//   const quotesTable = database.getSchema().table("quotes");
//   const query = database
//     .delete()
//     .from(quotesTable)
//     .where(quotesTable.page.eq(lf.bind(0)))
//     return query.bind([quotesPage]).exec();
// }

// console.log ('=============================================================== КОНЕЦ 3 ЗАДАНИЯ ====================================================================');



// function buildSchema() {
//   const schemaBuilder = lf.schema.create("book shop_db", 5);
//   schemaBuilder
//   .createTable("sections")
//   .addColumn("numberSections", lf.Type.INTEGER)
//   .addColumn("nameSections", lf.Type.STRING)
//   .addColumn("ageLimit", lf.Type.INTEGER)
//   .addPrimaryKey(["numberSections"]); 
  
//   schemaBuilder
//     .createTable("books")
//     .addColumn("book", lf.Type.STRING)
//     .addColumn("author", lf.Type.STRING)
//     .addColumn("placeOfPublication", lf.Type.STRING)
//     .addColumn("publishingHouse", lf.Type.STRING)
//     .addColumn("publicationDate", lf.Type.DATE_TIME)
//     .addColumn("price", lf.Type.INTEGER)
//     .addColumn("numberOfCopies", lf.Type.INTEGER)
//     .addColumn("pages", lf.Type.INTEGER)
//     .addColumn("purchaseDate", lf.Type.DATE_TIME)
//     .addColumn("note", lf.Type.BOOLEAN)
//     .addColumn("numberSections", lf.Type.INTEGER)
//     .addPrimaryKey(["book"])
//     .addForeignKey("fk_booksSections", {
//       local: "numberSections",
//       ref: "sections.numberSections",
//     });
  
//     schemaBuilder
//     .createTable("quotes")
//     .addColumn("book", lf.Type.STRING)
//     .addColumn("page", lf.Type.INTEGER)
//     .addColumn("quote", lf.Type.STRING)
//     .addPrimaryKey(["quote"])
//     .addForeignKey("fk_books", {
//       local: "book",
//       ref: "books.book",
//     }); 
    
//    return schemaBuilder.connect();
// }

// //выводит в печать секции
// function printAllSections() {
//   const sectionsTable = database.getSchema().table("sections");

//   return database.select().from(sectionsTable).exec().then(console.table);
// }

// //выводит в печать книги
// function printAllBooks() {
//   const booksTable = database.getSchema().table("books");

//   return database.select().from(booksTable).exec().then(console.table);
// }

// //выводит в печать цитаты
// function printAllQuotes() {
//   const quotesTable = database.getSchema().table("quotes");

//   return database.select().from(quotesTable).exec().then(console.table);
// }
//---------------------------------------------------------------------------------------------------------



// // 6 ЛАБОРАТОРНАЯ РАБОТА



// const database = await buildSchema();

// await saveSections({
//   numberSections: 5,
//   nameSections: "Научная литература",
//   ageLimit: 0,
// });

// const sections = {
//   numberSections: 3,
//   nameSections: "Психология",
//   ageLimit: 16,
// }
// await  saveSections(sections);

// await saveSections({
//   numberSections: 1,
//   nameSections: "Графический роман",
//   ageLimit: 18,
// });

// await saveBooks({
//   book: "Грокаем алгоритмы" ,
//   author: "Адитья Бхаргава",
//   placeOfPublication: "Санкт-Петерберг",
//   publishingHouse: "Дом печати - ВЯТКА",
//   publicationDate: new Date("2022-06-01"),
//   price: 889,
//   numberOfCopies: 10,
//   pages: 274,
//   purchaseDate: new Date("2023-01-01"),
//   note: false,
//   numberSections: 5, 
// })

// await saveBooks({
//   book:"Искусство любить" ,
//   author: "Эрих Фромм",
//   placeOfPublication: "Москва",
//   publishingHouse: "Издательство АСТ",
//   publicationDate: new Date("2021-03-05"),
//   price: 499,
//   numberOfCopies: 13,
//   pages: 224,
//   purchaseDate: new Date("2021-04-05"),
//   note: true,
//   numberSections: 3,
// });

// await saveBooks({
//   book:"Девушка у моря" ,
//   author: "Инио Асано",
//   placeOfPublication: "Екатеринбург",
//   publishingHouse: "Фабрика комиксов",
//   publicationDate: new Date("2018-06-06"),
//   price: 1300,
//   numberOfCopies: 3,
//   pages: 193,
//   purchaseDate: new Date("2021-01-01"),
//   note: true,
//   numberSections: 1,
// });

// const quotes = {
//   book:"Грокаем алгоритмы" ,
//   page: 10,
//   quote: "'Грокнуть' означает понять так полно, что наблюдатель становится частью объекта наблюдения...",  
// };

// await saveQuotes(quotes);

// await saveQuotes({
//   book:"Искусство любить" ,
//   page: 176,
//   quote: "Современный человек превратил себя в товар; он ощущает свою внутреннюю энергию как вклад, благодаря которому он получит наивысший доход с учетом своего положения и ситуации на личностном рынке",
// });


// await saveQuotes({
//   book:"Девушка у моря" ,
//   page: 88,
//   quote: "Обычно я никогда не находила то, что искала. Но, может быть я с самого начала и не надеялась что-то найти?",
// });


// // сохранение секции в бд
//  function saveSections(sections) {
//   const sectionsTable = database.getSchema().table("sections");
//   const row = sectionsTable.createRow(sections);

//   return database.insertOrReplace().into(sectionsTable).values([row]).exec();
// }

// // сохранение книг в бд
//  function saveBooks(books) {
//   const booksTable = database.getSchema().table("books");
//   const row = booksTable.createRow(books);

//   return database.insertOrReplace().into(booksTable).values([row]).exec();
// }

// // сохранение цитат в бд
// function saveQuotes(quotes) {
//   const quotesTable = database.getSchema().table("quotes");
//   const row = quotesTable.createRow(quotes);

//   return database.insertOrReplace().into(quotesTable).values([row]).exec();
// }


// await printAllSections();
// await printAllBooks();
// await printAllQuotes();
// //console.log(await getBooksWithSections()); //неяв внутр
// // console.log (await  getSectionsWithBooks()); //левое соединение
// //console.log(await  getBooksByNote());
// //console.log(await findBooksByStartDateLessThan(new Date("2023-01-01")));

// // console.log(
// // await  findBooksByPublicationDateBetween(
// // new Date("2020-01-01"),
// // new Date("2022-12-31")
// //   )
// // );

// //console.log(await getBooksByPrice());

// console.log(await getBooksBySectionsName()); //(запрос со сложным условием не выполняется)
// //console.log(findTheLowestBookPrice());
// //console.log(getCostOfAllBooks());
// //console.log(await findTheNewestBook());

// // 1. левое соединение

// function getSectionsWithBooks() {
//   const booksTable = database.getSchema().table("books");
//   const sectionsTable = database.getSchema().table("sections");

//   return database
//     .select()
//     .from(sectionsTable)
//     .leftOuterJoin(booksTable, sectionsTable. numberSections.eq(booksTable. numberSections))
//     .exec();
// }




// // 2. неявное внутреннее соединение (только к 1 книжке?)
// function getBooksWithSections() {
//   const booksTable = database.getSchema().table("books");
//   const sectionsTable = database.getSchema().table("sections");

//   return database
//     .select()
//     .from(sectionsTable)
//     .innerJoin(booksTable, sectionsTable. numberSections.eq(booksTable. numberSections))
//     //.where(booksTable.numberSections.eq(sectionsTable.numberSections.eq))
//     .exec();
// }

// //3. 1ый запрос с различными предикатами фильтрации (не вывел примечание?)

// function getBooksByNote(){
//   const booksTable = database.getSchema().table("books");

//   return database
//   .select()
//   .from(booksTable)
//   .where(booksTable.note.eq(true))
//   .exec();
// }


// // 2ой запрос вывел все книги,  которые продались раньше 2023.01.01 
// function findBooksByStartDateLessThan(date) {
//   const booksTable = database.getSchema().table("books");

//   return database
//     .select()
//     .from(booksTable)
//     .where(booksTable.purchaseDate.lt(date))
//     .exec();
// }

// // 3ий запрос выводит книги, если их опубликовали в заданный период
// function findBooksByPublicationDateBetween(startDate, endDate) {
//   const booksTable = database.getSchema().table("books");

//   return database
//     .select()
//     .from(booksTable)
//     .where(booksTable. publicationDate.between(startDate, endDate))
//     .exec();
// }

// // 4ый выводит книгу, с заданной ценой
// function getBooksByPrice(){
//   const booksTable = database.getSchema().table("books");

//   return database
//   .select()
//   .from(booksTable)
//   .where(booksTable.price.eq("1300"))
//   .exec();
// }



// // 4. Запрос со сложным условием ( не выполняется)
// function getBooksBySectionsName() {
//   const booksTable = database.getSchema().table("books");
//   const sectionsTable = database.getSchema().table("sections");

//   return database
//     .select()
//     .from(booksTable)
//     .innerJoin(sectionsTable, booksTable.numberSections.eq(sectionsTable.numberSections))
//     .where(
//       lf.op.and(
//         sectionsTable.nameSections.in(["Психология", "Научная литература"]),
//         booksTable.note.eq(false)
//       )
//     )
//     .exec();
// }

// // 6.  1ый запрос выводить самую дешёвую книгу
// function findTheLowestBookPrice() {
//   const booksTable = database.getSchema().table("books");

//   return database
//     .select(lf.fn.min(booksTable.price))
//     .from(booksTable)
//     .exec();
// }

// // 2ой запрос выводить сумму стоимости всех 3х книг
// function getCostOfAllBooks() {
//   const booksTable = database.getSchema().table("books");

//   return database
//     .select(lf.fn.sum(booksTable.price))
//     .from(booksTable)
//     .exec();
// }

// // 3ий запрос выводит самую ново-напечатанную книгу
// function findTheNewestBook() {
//   const booksTable = database.getSchema().table("books");

//   return database
//     .select(lf.fn.max(booksTable.publicationDate))
//     .from(booksTable)
//     .exec();
// }



// function buildSchema() {
//   const schemaBuilder = lf.schema.create("book shop_db", 5);
//   schemaBuilder
//   .createTable("sections")
//   .addColumn("numberSections", lf.Type.INTEGER)
//   .addColumn("nameSections", lf.Type.STRING)
//   .addColumn("ageLimit", lf.Type.INTEGER)
//   .addPrimaryKey(["numberSections"]); 
  
//   schemaBuilder
//     .createTable("books")
//     .addColumn("book", lf.Type.STRING)
//     .addColumn("author", lf.Type.STRING)
//     .addColumn("placeOfPublication", lf.Type.STRING)
//     .addColumn("publishingHouse", lf.Type.STRING)
//     .addColumn("publicationDate", lf.Type.DATE_TIME)
//     .addColumn("price", lf.Type.INTEGER)
//     .addColumn("numberOfCopies", lf.Type.INTEGER)
//     .addColumn("pages", lf.Type.INTEGER)
//     .addColumn("purchaseDate", lf.Type.DATE_TIME)
//     .addColumn("note", lf.Type.BOOLEAN)
//     .addColumn("numberSections", lf.Type.INTEGER)
//     .addPrimaryKey(["book"])
//     .addForeignKey("fk_booksSections", {
//       local: "numberSections",
//       ref: "sections.numberSections",
//     });
  
//     schemaBuilder
//     .createTable("quotes")
//     .addColumn("book", lf.Type.STRING)
//     .addColumn("page", lf.Type.INTEGER)
//     .addColumn("quote", lf.Type.STRING)
//     .addPrimaryKey(["quote"])
//     .addForeignKey("fk_books", {
//       local: "book",
//       ref: "books.book",
//     }); 
    
//    return schemaBuilder.connect();
// }

// //выводит в печать секции
// function printAllSections() {
//   const sectionsTable = database.getSchema().table("sections");

//   return database.select().from(sectionsTable).exec().then(console.table);
// }

// //выводит в печать книги
// function printAllBooks() {
//   const booksTable = database.getSchema().table("books");

//   //return database.select().from(booksTable).exec().then(console.table);
//   // 5. СОРТИРОВКА ПО ВОЗРАСТАНИЮ
//   return (
//     database
//       .select()
//       .from(booksTable)
//       .orderBy(booksTable. book, lf.Order.ASC)
//       .exec()
//       .then(console.table)
//   );
// }


// //выводит в печать цитаты
// function printAllQuotes() {
//   const quotesTable = database.getSchema().table("quotes");

//   return database.select().from(quotesTable).exec().then(console.table);
// }



db.select(table1.name1, table1.name2).from(table1).exec()
