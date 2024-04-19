import React from "react";
import Article from "../components/Article";

const articles = [
	{
		id: 1,
		title: "Czym jest pieróg",
		author: "Wikipedia.pl",
		text: "Ogólnie kawałki cienkiego, elastycznego i dobrze zlepiającego się ciasta napełnione najrozmaitszymi farszami i ugotowane w wodzie lub na parze, upieczone, usmażone czy grillowane; ciasto może zostać zrobione z dowolnego rodzaju mąki (pszennej, ryżowej, kukurydzianej, żytniej, gryczanej) z dodatkiem wody, jaj, drożdży i tłuszczu (masła, oleju, smalcu), śmietany oraz innych dodatków smakowo-zapachowo-barwiących; przy czym ciasto powinno być dostosowane do farszu; pierogi mogą mieć rozmaite kształty np. stożka, sakiewki, trójkąta, półkrążka; potrawa, którą można spotkać w wielu kuchniach na całym świecie, np. w kuchniach polskiej, włoskiej, rosyjskiej, ukraińskiej, meksykańskiej, indyjskiej czy żydowskiej; jest to kulinarny koncept pochodzący z Chin, który na ziemie polskie dotarł prawdopodobnie w XIII wieku. ",
	},
	{
		id: 2,
		title: "Etymologia wyrazu",
		author: "Wikipedia.pl",
		text: "Początkowo pierogi nazywano w języku polskim pirogami (w liczbie pojedynczej był to ten piróg). Słowo pierogi zadomowiło się w polszczyźnie w XVII wieku. W XIX wieku słowo pierogi miało już takie samo znaczenie jak obecnie i oznaczało potrawę z ciasta głównie pszennego, gotowanego albo pieczonego, wypełnionego różnymi rodzajami nadzienia. Na początku XX wieku różne znaczenia wyrazu pieróg zostały zamieszczone w Słowniku ilustrowanym języka polskiego autorstwa Michała Arcta z 1916 roku",
	},
	{
		id: 3,
		title: "Historia pieroga",
		author: "Wikipedia.pl",
		text: "Według legendy Jacek Odrowąż zachwycił się ich smakiem podczas bytności w Kijowie i dzięki niemu zagościły w Polsce. Miał on karmić pierogami polską biedotę. Współcześnie pierogi są uważane przez Polaków, jak i cudzoziemców, za potrawę typowo polską, narodową, jednak przyjmuje się, że pomysł nadziewania kawałków ciasta makaronowego różnymi rodzajami farszu i ich gotowania, pieczenia lub smażenia pochodzi z Chin, skąd przez Ruś dotarł do Polski, a następnie rozpowszechnił się dalej na Zachód aż do Francji. Podobno pierogi znano już w XIII wieku. Początkowo przygotowywano je wyłącznie na specjalne okazje i święta. Takie odświętne i specjalne pirogi różniły się między sobą smakiem i kształtem oraz posiadały własne nazwy, np.: kurniki – duże pierogi weselne z różnymi nadzieniami, zawsze z dodatkiem mięsa kurzego; knysze – pierogi żałobne, podawane na stypie; koladki – pieczone w styczniu, w okresie kolędowania; hreczuszki – przyrządzane z mąki gryczanej; sanieżki i socznie – słodkie pierożki pieczone najczęściej z okazji imienin.",
	},
];

const HomePage = () => {
	const artList = articles.map((article) => <Article key={article.id} {...article} />);
	return (
		<>
			<div className="Home">{artList}</div>
		</>
	);
};

export default HomePage;
