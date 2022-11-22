import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
	canLink = "";
	metaPages = [
		{
		  "urlKey": "night-queen-perfume",
		  "metaTitle": "NightQueen Perfume | #Nightqueen Eau De Parfum For Women",
		  "metaKeyword": "Night Queen Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online, Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "If you are looking for NightQueen Perfume? Perfumers Club offering genuine perfume at lowest price in India.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/NightQueen/NightQueen-1.jpg"
		},
		{
		  "urlKey": "trend-setter-perfume",
		  "metaTitle": "Trend Setter Perfume | #Trendsetter Eau De Parfum For Women",
		  "metaKeyword": "Trend Setter Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Get Trend Setter Perfume for women at affordable price and explore your love in air. Buy online and get at home doorstep delivery in commitment time.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Trendsetter/Trendsetter-1.jpg"
		},
		{
		  "urlKey": "dreamer-perfume",
		  "metaTitle": "Dreamer Perfume | #Dreamer Eau De Parfum For Women",
		  "metaKeyword": "Dreamer Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Buy Dreamer Perfume for women at attractive price and make a perfect choice for your love and life. Perfumers Club is best perfume shop in India.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Dreamer/Dreamer-1.jpg"
		},
		{
		  "urlKey": "swag-perfume",
		  "metaTitle": "Swag Perfume | #Swag Eau De Parfum For Men",
		  "metaKeyword": "Swag Perfume, Online Perfume Store India,Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men , Perfumes, Fragrances",
		  "metaDescription": "Welcome To Perfumers Club! It offers Swag Perfume for men at best price and also have wide range of perfume like EDP, EDT and cologne. ",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Swag/Swag-1.jpg"
		},
		{
		  "urlKey": "wanderer-perfume",
		  "metaTitle": "Wanderer Perfume | #Wanderer Eau De Parfum For Men",
		  "metaKeyword": "Wanderer Perfume, Online Perfume Store India,Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Are you looking for Wanderer Perfume for men? Then must visit Perfumers Club online perfume store and buy at lowest price.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Wanderer/Wanderer-1.jpg"
		},
		{
		  "urlKey": "challenger-perfume",
		  "metaTitle": "Challenger Perfume | #Challenger Eau De Parfum For Men",
		  "metaKeyword": "Challenger Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men , Perfumes, Fragrances",
		  "metaDescription": "Buy now Challenger Perfume for men at attractive price. Also choose wide range of luxury perfumes for men and women.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Challenger/Challenger-1.jpg"
		},
		{
		  "urlKey": "gentle-man-perfume",
		  "metaTitle": "Gentleman Perfume | #Gentleman Eau De Parfum For Men",
		  "metaKeyword": "Gentle Man Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Shop now Gentle Man Perfume for men at heavy discount price with grantee of original perfume. Perfumers Club offering doorstep delivery in India.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Gentleman/Gentleman-1.jpg"
		},
		{
		  "urlKey": "wild-child-perfume",
		  "metaTitle": "Wild Child Perfume | #Wildchild Eau De Parfum For Men",
		  "metaKeyword": "Wild Child Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men , Perfumes, Fragrances",
		  "metaDescription": "Buy online Wild Child Perfume for men on Perfumers Club online store at low price. We deals unique and original perfume and  offer doorstep delivery in India. ",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/WildChild/WildChild-1.jpg"
		},
		{
		  "urlKey": "party-animal-perfume",
		  "metaTitle": "Party Animal Perfume | #Partyanimal Eau De Parfum For Men",
		  "metaKeyword": "Party Animal Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men , Perfumes, Fragrances",
		  "metaDescription": "Shop now party animal perfume for men and get genuine product at doorstep delivery. We offer various kind of pleasant perfume at low price.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/PartyAnimal/PartyAnimal-1.jpg"
		},
		{
		  "urlKey": "into-the-wild-perfume",
		  "metaTitle": "Into The Wild Perfume | #Intothewild Eau De Parfum For Men",
		  "metaKeyword": "Into The Wild Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Looking for Into The Wild Perfume for men then buy now on Perfumers Club and get original branded perfume at offer price.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/IntoTheWild/IntoTheWild-1.jpg"
		},
		{
		  "urlKey": "eternal-love-perfume",
		  "metaTitle": "Eternal Love Perfume | #Eternallove Eau De Parfum For Women",
		  "metaKeyword": "Eternal Love Perfume, Online Perfume Store India,Perfume Online, Branded Perfumes Online, Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men , Perfumes, Fragrances",
		  "metaDescription": "Browse online and choose a perfect perfume for your dream. Eternal Love Perfume for women is one of the popular perfume in India. Shop Now!",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/EternalLove/EternalLove-1.jpg"
		},
		{
		  "urlKey": "bomb-shell-perfume",
		  "metaTitle": "BombShell Perfume | #Bombshell Eau De Parfum For Women",
		  "metaKeyword": "Bomb Shell Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Available Bomb Shell Perfume for women on India’s leading online perfume store Perfumes Club at affordable price. ",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Bombshell/Bombshell-1.jpg"
		},
		{
		  "urlKey": "social-perfume",
		  "metaTitle": "Social Perfume | #Social Eau De Parfum For Women",
		  "metaKeyword": "Social Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online, Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances\r\n",
		  "metaDescription": "Buy now Social Perfume for women online at offer price and get original perfume at doorstep delivery in India. Shop now and enjoy now.\r\n",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Social/Social-1.jpg"
		},
		{
		  "urlKey": "iconic-perfume",
		  "metaTitle": "Iconic Perfume | #Iconic Eau De Parfum For Women",
		  "metaKeyword": "Iconic Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "We are offering Iconic perfume for women at affordable price. Choose your dream perfume and spread your love in air.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Iconic/Iconic-1.jpg"
		},
		{
		  "urlKey": "aqua-cool-perfume",
		  "metaTitle": "Aqua Cool Perfume | #Aquacool Eau De Parfum For Men And Women",
		  "metaKeyword": "Aqua Cool Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances\r\n",
		  "metaDescription": "Available Aqua Cool Perfume for men and women online at offer price in India. Buy now as your dream fragrance and get delivery at your door.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/AquaCool/AquaCool-1.jpg"
		},
		{
		  "urlKey": "royale-perfume",
		  "metaTitle": "Royale Perfume | #Royale Eau De Parfum For Men And Women",
		  "metaKeyword": "Royale Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances\r\n",
		  "metaDescription": "Shop now royale eau de parfum for men and women at lowest price and grantee for genuine perfume bottle.\r\n",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Royale/Royale-1.jpg"
		},
		{
		  "urlKey": "achieve-perfume",
		  "metaTitle": "Achieve Perfume | #Achieve Eau De Parfum For Men And Women",
		  "metaKeyword": "Achieve Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Available achieve eau de parfum for men and women on online Perfumers Club  store at offer price. Shop now and get doorstep delivery.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Achieve1st.png"
		},
		{
		  "urlKey": "rebel-perfume",
		  "metaTitle": "Rebel Perfume | #Rebel Eau De Parfum For Men And Women",
		  "metaKeyword": "Rebel Perfume, Online Perfume Store India, Perfume Online, Branded Perfumes Online, Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Buy online rebel eau de parfum for men and women and get doorstep delivery at low price. We deliver trust of genuine products. ",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/Rebel/Rebel-1.jpg"
		},
		{
		  "urlKey": "all-time-classic-fragrances-for-women",
		  "metaTitle": "All Time Classic Fragrances for Women",
		  "metaKeyword": "All Time Classic Fragrances for Women, Online Perfume Store India,Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men , Perfumes, Fragrances",
		  "metaDescription": "Perfumers Club is an online perfume store and has collection of high quality fragrance. You can choose and buy at attractive price.",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Orange/PACK-OF-3/P1-Main-Image.webp"
		},
		{
		  "urlKey": "all-time-classic-fragrances-for-men",
		  "metaTitle": "All Time Classic Fragrances for Men",
		  "metaKeyword": "All Time Classic Fragrances for Men, Online Perfume Store India, Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men , Perfumes, Fragrances",
		  "metaDescription": "If you are looking for high standard then buy all time classic fragrances for men. Feel all time refresh and happy. ",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Black/Pack-of-3/1-P-Main-Image.webp"
		},
		{
		  "urlKey": "best-fragrances-for-women",
		  "metaTitle": "Best Fragrances For Women",
		  "metaKeyword": "Best Fragrances For Women ,Online Perfume Store India,Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Buy online best fragrances for women at low price, best quality and long lasting and amazing fragrance. We provide you doorstep delivery in pan India.\r\n",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Turquoise/Pack-of-3/P1-main-image.webp"
		},
		{
		  "urlKey": "best-fragrances-for-men",
		  "metaTitle": "Best Fragrances For Men | Men Perfume",
		  "metaKeyword": "Best Fragrances For Men , Online Perfume Store India,Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Buy online best fragrances for men at offer price and get your perfume doorstep delivery. We provide you genuine fragrance. ",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Green/Pack-of-3/1-P-main-image.webp"
		},
		{
		  "urlKey": "best-aquatic-and-citrus-fragrances-for-unisex",
		  "metaTitle": "Best Aquatic And Citrus Fragrances for Unisex",
		  "metaKeyword": "Best Aquatic And Citrus Fragrances for Unisex, Online Perfume Store India,Perfume Online, Branded Perfumes Online,Top Indian Perfume, Premium Perfume, Luxury Perfume, Indian Perfume Brands, Perfume for Girls, Perfume for Boys, Perfume for Women, Perfume for Men  , Perfumes, Fragrances",
		  "metaDescription": "Find a best aquatic and citrus fragrances for unisex at lowest price and 100% grantee for genuine product. Perfumers Club provide you doorstep delivery.",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Blue/Pack-of-3/1-P-Main-Image.webp"
		},
		{
		  "urlKey": "combo-perfume-achieve-and-aquacool",
		  "metaTitle": "Perfumers Club Combo Pack(Achieve Perfume + AquaCool Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/AA.jpg"
		},
		{
		  "urlKey": "combo-perfume-achieve-and-rebel",
		  "metaTitle": "Perfumers Club Combo Pack(Achieve Perfume + Rebel Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/AR.jpg"
		},
		{
		  "urlKey": "combo-perfume-challenger-and-gentleman",
		  "metaTitle": "Perfumers Club Combo Pack(Challenger Perfume + Gentleman Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/CGM.jpg"
		},
		{
		  "urlKey": "combo-perfume-dreamer-and-bombshell",
		  "metaTitle": "Perfumers Club Combo Pack(Dreamer Perfume + Bombshell Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/DBS.jpg"
		},
		{
		  "urlKey": "combo-perfume-dreamer-and-iconic",
		  "metaTitle": "Perfumers Club Combo Pack(Dreamer Perfume + Iconic Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/DI.jpg"
		},
		{
		  "urlKey": "combo-perfume-dreamer-and-trendsetter",
		  "metaTitle": "Perfumers Club Combo Pack(Dreamer Perfume + Trendsetter Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/DT.jpg"
		},
		{
		  "urlKey": "combo-perfume-eternallove-and-trendsetter",
		  "metaTitle": "Perfumers Club Combo Pack(EternalLove Perfume + Trendsetter Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/ELT.jpg"
		},
		{
		  "urlKey": "combo-perfume-intothewild-and-wildchild",
		  "metaTitle": "Perfumers Club Combo Pack(IntoTheWild Perfume + WildChild Perfume)",
		  "metaKeyword": "Perfume, Perfume for Men, Perfume for Women, Luxury Perfume, Unboxed Perfume",
		  "metaDescription": "Shop now combo pack perfume and save money. We have create combo pack of luxury perfume for men and women. ",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/ETW.jpg"
		},
		{
		  "urlKey": "combo-perfume-iconic-and-eternallove",
		  "metaTitle": "Perfumers Club Combo Pack(Iconic Perfume + EternalLove Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/IEL.jpg"
		},
		{
		  "urlKey": "combo-perfume-intothewild-and-partyanimal",
		  "metaTitle": "Perfumers Club Combo Pack(IntoTheWild Perfume + PartyAnimal Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/IPA.jpg"
		},
		{
		  "urlKey": "combo-perfume-intothewild-and-wanderer",
		  "metaTitle": "Perfumers Club Combo Pack(IntoTheWild Perfume + Wanderer Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/ITW.jpg"
		},
		{
		  "urlKey": "combo-perfume-nightqueen-and-trendsetter",
		  "metaTitle": "Perfumers Club Combo Pack(NightQueen Perfume + Trendsetter Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/NQT.jpg"
		},
		{
		  "urlKey": "combo-perfume-royale-and-aquacool",
		  "metaTitle": "Perfumers Club Combo Pack(Royale Perfume + AquaCool Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/RA.jpg"
		},
		{
		  "urlKey": "combo-perfume-social-and-eternallove",
		  "metaTitle": "Perfumers Club Combo Pack(Social Perfume + EternalLove Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "If you want to buy combo pack perfume then must be choose here. We have collection of best luxury perfumes at affordable rate. You can order and sure for original products. ",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/SEL.jpg"
		},
		{
		  "urlKey": "combo-perfume-wildchild-and-partyanimal",
		  "metaTitle": "Perfumers Club Combo Pack(WildChild Perfume + PartyAnimal Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/WCPA.jpg"
		},
		{
		  "urlKey": "combo-perfume-wanderer-and-partyanimal",
		  "metaTitle": "Perfumers Club Combo Pack(Wanderer Perfume + PartyAnimal Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/WPA.jpg"
		},
		{
		  "urlKey": "combo-perfume-wanderer-and-wildchild",
		  "metaTitle": "Perfumers Club Combo Pack(Wanderer Perfume + WildChild Perfume)",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumebooth/images/PCCombo/WWC.jpg"
		},
		{
		  "urlKey": "partyanimal",
		  "metaTitle": "Party Animal Perfume | #Partyanimal Eau De Parfum For Men",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/PartyAnimal1st.png"
		},
		{
		  "urlKey": "nightqueen",
		  "metaTitle": "Night Queen Perfume | #Nightqueen Eau De Parfum For Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/NightQueen1st.png"
		},
		{
		  "urlKey": "trendsetter",
		  "metaTitle": "Trend Setter Perfume | #Trendsetter Eau De Parfum For Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Trendsetter1st.png"
		},
		{
		  "urlKey": "dreamer",
		  "metaTitle": "Dreamer Perfume | #Dreamer Eau De Parfum For Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Dreamer1st.png"
		},
		{
		  "urlKey": "swag",
		  "metaTitle": "Swag Perfume | #Swag Eau De Parfum For Men",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Swag1st.png"
		},
		{
		  "urlKey": "wanderer",
		  "metaTitle": "Wanderer Perfume | #Wanderer Eau De Parfum For Men",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Wandrer1st.png"
		},
		{
		  "urlKey": "challenger",
		  "metaTitle": "Challenger Perfume | #Challenger Eau De Parfum For Men",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Challenger1st.png"
		},
		{
		  "urlKey": "gentleman",
		  "metaTitle": "Gentle Man Perfume | #Gentleman Eau De Parfum For Men",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Gentlemen1st.png"
		},
		{
		  "urlKey": "wildchild",
		  "metaTitle": "Wild Child Perfume | #Wildchild Eau De Parfum For Men",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/WildChild1st.png"
		},
		{
		  "urlKey": "intothewild",
		  "metaTitle": "Into The Wild Perfume | #Intothewild Eau De Parfum For Men",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/IntoTheWild1st.png"
		},
		{
		  "urlKey": "eternallove",
		  "metaTitle": "Eternal Love Perfume | #Eternallove Eau De Parfum For Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/EternalLove1st.png"
		},
		{
		  "urlKey": "bombshell",
		  "metaTitle": "Bomb Shell Perfume | #Bombshell Eau De Parfum For Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/BombShell1st.png"
		},
		{
		  "urlKey": "social",
		  "metaTitle": "Social Perfume | #Social Eau De Parfum For Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Social1st.png"
		},
		{
		  "urlKey": "iconic",
		  "metaTitle": "Iconic Perfume | #Iconic Eau De Parfum For Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Iconic1st.png"
		},
		{
		  "urlKey": "aquacool",
		  "metaTitle": "Aqua Cool Perfume | #Aquacool Eau De Parfum For Men And Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/AquaCool-1st.png"
		},
		{
		  "urlKey": "royale",
		  "metaTitle": "Royale Perfume | #Royale Eau De Parfum For Men And Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Royale1st.png"
		},
		{
		  "urlKey": "achieve",
		  "metaTitle": "Achieve Perfume | #Achieve Eau De Parfum For Men And Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Achieve1st.png"
		},
		{
		  "urlKey": "rebel",
		  "metaTitle": "Rebel Perfume | #Rebel Eau De Parfum For Men And Women",
		  "metaKeyword": "",
		  "metaDescription": "",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Testing/New/Rebel1st.png"
		},
		{
		  "urlKey": "All-time-classic-perfume-for-women-LIGHTR-and-3X8-ml-perfumes",
		  "metaTitle": "All Time Classic Fragrances for Women(LIGHTR + 3 Perfumes x 8ml)",
		  "metaKeyword": "All Time Classic Fragrances for Women, Perfume Refill Pack, Perfume for Girls, Perfume for women, top Indian perfume",
		  "metaDescription": "All Time Classic Fragrances for Women(LIGHTR + 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Orange/Lightr/P1-Main-Image.webp"
		},
		{
		  "urlKey": "best-perfume-for-men-LIGHTR-and-3X8-ml-perfumes",
		  "metaTitle": "Best Fragrance for Men (LIGHTR + 3 Perfumes x 8ml)",
		  "metaKeyword": "Best Fragrance for Men, Perfume for women, top Indian perfume",
		  "metaDescription": "Best Fragrance for Men (LIGHTR + 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Green/Lightr/P1-main-image.webp"
		},
		{
		  "urlKey": "all-time-classic-perfume-for-men-LIGHTR-and-3X8-ml-perfumes",
		  "metaTitle": "All Time Classic Fragrances for Men(LIGHTR + 3 Perfumes x 8ml)",
		  "metaKeyword": "All Time Classic Fragrances for Men, Perfume for Men, Perfume for Women, Top Indian Perfume",
		  "metaDescription": "All Time Classic Fragrances for Men(LIGHTR + 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Black/Lightr/P1-Main-image.webp"
		},
		{
		  "urlKey": "best-perfume-for-women-LIGHTR-and-3X8-ml-perfumes",
		  "metaTitle": "Best Fragrance for Women(LIGHTR + 3 Perfumes x 8ml)",
		  "metaKeyword": "Best Fragrance for Women, Perfume for girls, perfume for women, perfume for men, perfume for unisex",
		  "metaDescription": "Best Fragrance for Women(LIGHTR + 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Turquoise/Lightr/P1-Main-Image.webp"
		},
		{
		  "urlKey": "best-aquatic-and-citrus-perfume-for-women-LIGHTR-and-3X8-ml-perfumes",
		  "metaTitle": "Best Aquatic and Citrus Fragrances for Men and Women(LIGHTR + 3 Perfumes x 8ml)",
		  "metaKeyword": "Best Aquatic and Citrus Fragrances for Men and Women, Unisex Perfume, Luxury Perfume, Top Indian Perfume, Perfume for men, Perfume for women",
		  "metaDescription": "Best Aquatic and Citrus Fragrances for Men and Women(LIGHTR + 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Blue/Lightr/P1-Main-Image.webp"
		},
		{
		  "urlKey": "best-perfume-for-men-set-of-3-perfumes-x-8ml",
		  "metaTitle": "Best Fragrance for Men (Set of 3 Perfumes x 8ml)",
		  "metaKeyword": "Best Fragrance for Men, Perfume for men, Men Perfume, Top Indian Perfume, Unisex Perfume, Luxury Perfume",
		  "metaDescription": "Best Fragrance for Men (Set of 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Green/Refill/P1-main-image.webp"
		},
		{
		  "urlKey": "best-perfume-for-women-set-of-3-perfumes-x-8ml",
		  "metaTitle": "Best Fragrance for Women (Set of 3 Perfumes x 8ml)",
		  "metaKeyword": "Best Fragrance for Women, Perfume for Girls, Women Perfume, Top Indian Perfume, Girls Perfume",
		  "metaDescription": "Best Fragrance for Women (Set of 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Turquoise/Refill/P1-main-image.webp"
		},
		{
		  "urlKey": "alltime-classic-perfume-for-men-set-of-3-perfumes-x-8ml",
		  "metaTitle": "All Time Classic Fragrances for Men (Set of 3 Perfumes x 8ml)",
		  "metaKeyword": "All Time Classic Fragrances for Men, Perfume for Men, Luxury Perfume, Top Indian Perfum",
		  "metaDescription": "All Time Classic Fragrances for Men (Set of 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Black/Refill/P1-main-images.webp"
		},
		{
		  "urlKey": "alltime-classic-perfume-for-women-set-of-3-perfumes-x-8ml",
		  "metaTitle": "All Time Classic Fragrances for Women (Set of 3 Perfumes x 8ml)",
		  "metaKeyword": "All Time Classic Fragrances for Women, Perfume for Women, Girls Perfume, Top Indian Perfume, Luxury Perfume",
		  "metaDescription": "Get combo set of All Time Classic Fragrances for Women with pocket friendly budget and high quality luxury perfume. Try it and convert your dream choice in big size with existing coupon code.",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Orange/Refill/P1-Main-Image.webp"
		},
		{
		  "urlKey": "best-auatic-and-citrus-perfume-for-unisex-set-of-3-perfumes-x-8ml",
		  "metaTitle": "Best Aquatic and Citrus Fragrances for Men and Women (Set of 3 Perfumes x 8ml)",
		  "metaKeyword": "Best Aquatic and Citrus Fragrances for Men and Women, Unisex Perfume, Luxury Perfume, Top Indian Perfume, Perfume for men, Perfume for girls",
		  "metaDescription": "Best Aquatic and Citrus Fragrances for Men and Women (Set of 3 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Blue/Refill/P1-Main-Image.webp"
		},
		{
		  "urlKey": "the-complete-fragrance-set-for-men-LIGHTR-7X8ml-Perfumes",
		  "metaTitle": "The Complete Fragrance Set for Men (LIGHTR + 7 Perfumes x 8ml)",
		  "metaKeyword": "The Complete Fragrance Set for Men, Perfume for Men, Men Perfume",
		  "metaDescription": "If you want to change a new perfume each day in a week or want to make special day then must be buy The Complete Fragrance Set for Men. This combo set have LIGHTR + 7 Perfumes and all are amazing perfume. We brings luxury choice in affordable price.",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Brown/Lightr/P1-main-image.webp"
		},
		{
		  "urlKey": "the-complete-fragrance-set-for-women-LIGHTR-7X8ml-Perfumes",
		  "metaTitle": "The Complete Fragrance Set for Women (LIGHTR + 7 Perfumes x 8ml)",
		  "metaKeyword": "The Complete Fragrance Set for Women (LIGHTR + 7 Perfumes x 8ml)",
		  "metaDescription": "We have The Complete Fragrance Set for Women and this box contains LIGHTR + 7 Perfumes. These all perfumes have long lasting and amazing smell. You can order online with COD or Prepaid payment option and get safely doorstep delivery. ",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Red/Lightr/P1-Main-Image.webp"
		},
		{
		  "urlKey": "the-complete-fragrance-set-for-men-refill-pack-7X8ml-Perfumes",
		  "metaTitle": "The Complete Fragrance Set for Men (Set of 7 Perfumes x 8ml)",
		  "metaKeyword": "The Complete Fragrance Set for Men (Set of 7 Perfumes x 8ml)",
		  "metaDescription": "The Complete Fragrance Set for Men (Set of 7 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Brown/Refill/P1-Main-Image.webp"
		},
		{
		  "urlKey": "the-complete-fragrance-set-for-women-refill-pack-7X8ml-Perfumes",
		  "metaTitle": "The Complete Fragrance Set for Women (Set of 7 Perfumes x 8ml)",
		  "metaKeyword": "The Complete Fragrance Set for Women (Set of 7 Perfumes x 8ml)",
		  "metaDescription": "The Complete Fragrance Set for Women (Set of 7 Perfumes x 8ml)",
		  "image": "https://storage.googleapis.com/perfumersclub/APlusContent/Red/Refill/P1-main-image.webp"
		},
		{
		  "urlKey": "perfume-clearance-test",
		  "metaTitle": "Perfume Clearance Sale",
		  "metaKeyword": "Perfume Clearance Sale, International Perfume, Perfume for Men, Perfume for Women",
		  "metaDescription": "Are you tired of not getting enough discounts or not getting your favourite perfume at a much cheaper price? If yes, clearance sales are the call from the heaven for you.",
		  "image": ""
		},
		{
		  "urlKey": "diwali-gift-hampers",
		  "metaTitle": "Diwali Gift Hampers | Diwali Gift Online | Deepawali Gift Box",
		  "metaKeyword": "Diwali Gift Hampers, Diwali Gift Online, Deepawali Gift Box, Swag Perfume, Perfume for Boys, Top Perfume in India, Luxury Perfume",
		  "metaDescription": "Available unique  and best Diwali gift sets for you at best price. If you are looking for Deepawali Gift to send someone then must be buy perfume gift set .",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Packof7X8ml.jpg"
		},
		{
		  "urlKey": "anniversary-gifts",
		  "metaTitle": "Anniversary Perfume Gift Set | Wedding Anniversary Gifts in India",
		  "metaKeyword": "Anniversary Perfume Gift Set, Wedding Anniversary Gifts in India, Marriage Anniversary Gifts,  Anniversary Gifts, Perfumers Club, Perfume for Men, Perfume for Girls, Perfume, Top Indian Perfume",
		  "metaDescription": "Find the best anniversary gifts for your wife or husband online in India. Amazing made in India perfumes with luxurious aroma will be the perfect anniversary gift. Get them now online in India",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Lightr+7X8ml.jpg"
		},
		{
		  "urlKey": "perfume-for-girls",
		  "metaTitle": "Perfume for Girls | Girls Perfume",
		  "metaKeyword": "Perfume for Girls, Girls Perfume, Perfume, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume",
		  "metaDescription": "Be the life of your social circle by getting the aromatic trending perfumes for girls. Shop affordable girl perfumes online in India on Perfumer’s club. Amazing quality perfumes at the best price.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/PC100000019/All-Time-Classic-Fragrances-for-Women-380Pixel.png"
		},
		{
		  "urlKey": "perfume-for-women",
		  "metaTitle": "Perfume for Women | Ladies Perfume",
		  "metaKeyword": "Perfume for Women, Ladies Perfume, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume",
		  "metaDescription": "Steal their hearts and thoughts with your perfect perfume. Buy your next best perfume for women online in India. Perfumer’s Club has an amazing collection of budget friendly perfumes for women. Explore the collection and buy it now.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/PC100000019/All-Time-Classic-Fragrances-for-Women-380Pixel.png"
		},
		{
		  "urlKey": "perfume-for-men",
		  "metaTitle": "Perfume for Men | Perfume for Boys",
		  "metaKeyword": "Perfume for Men, Perfume for Boys, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume",
		  "metaDescription": "If you are tired of your boring regular perfumes, why not revamp it with something made in India. Buy the best of aromatic perfumes for men available online in India only on Perfumer’s club. This one stop shop has everything you need to smell good.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/PC100000020/All-Time-Classic-Fragrances-for-Men-380Pixel.png"
		},
		{
		  "urlKey": "perfume-gift-pack",
		  "metaTitle": "Buy Perfumes Gift Set in India | Perfume Gift Pack",
		  "metaKeyword": "Perfume Gift Pack, Perfume For Gift, Perfume Gift Sets, Perfumes Gift Set in India, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume",
		  "metaDescription": "Get the best perfume gift pack for every occasion from Perfumer’s Club. This online perfume store is known for amazing Indian perfumes. They have curated gift packs that have luxurious fragrances for men, women and unisex.",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Lightr+7X8ml.jpg"
		},
		{
		  "urlKey": "birthday-gift-set",
		  "metaTitle": "Buy Birthday Perfumes Gift Set Online | Birthday Gift Set",
		  "metaKeyword": "Birthday Gift Set, Birthday Perfumes Gift, Birthday Perfumes Gift Set Online, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume",
		  "metaDescription": "Getting the best gift on birthdays can make one’s day. Why not surprise your loved ones with the aromatic perfume gift packs . You can get perfumes birthday gifts for men and women from this store. ",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Lightr+7X8ml.jpg"
		},
		{
		  "urlKey": "corporate-gift",
		  "metaTitle": "Buy Corporate Perfume Gift Pack | Corporate Gift Set",
		  "metaKeyword": "Corporate Gift, Corporate Perfume Gift Set, Perfume Gift pack, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume",
		  "metaDescription": "Stay on minds of your associates, employees, and partners with best of corporate gifts. Explore amazing perfume gift option that will make your company stand out. Get them online in India now on Perfumer’s Club.",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Packof7X8ml.jpg"
		},
		{
		  "urlKey": "luxury-perfumes",
		  "metaTitle": "Buy Luxury Perfumes | Luxury Perfume Brands",
		  "metaKeyword": "Buy Luxury Perfumes, Luxury Perfume Brands, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume, standard perfume",
		  "metaDescription": "Explore the world of standard fragrances with one of the most popular Indian brands. These perfumes are available for men, women, and unisex. Buy aromatic luxurious perfumes from Perfumer’s Club online in India at affordable prices.",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Packof7X8ml.jpg"
		},
		{
		  "urlKey": "unboxed-perfumes",
		  "metaTitle": "Buy Unboxed Perfumes Online",
		  "metaKeyword": "Unboxed Perfumes, Perfume for Women, Perfume for Men, Unisex Perfume, Luxury Perfume, Top Indian Perfume",
		  "metaDescription": "Why buy unboxed perfumes when you can get the luxurious aromatic experience from Indian brands. Buy exquisite perfumes from Perfumer’s Club to smell amazing in every season. Enjoy perfumes for men and women and get them delivered all over the country. ",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Packof7X8ml.jpg"
		},
		{
		  "urlKey": "famous-perfumes-in-India",
		  "metaTitle": "Famous Perfumes in India | Popular Perfumes",
		  "metaKeyword": "Famous Perfumes in India, Original Perfume, Unisex Perfume, Best Unisex Fragrance in India, Top Indian Perfume, Luxury Perfume, Unboxed Perfume, Perfume for Men, Perfume for Women, Perfume for Girls, Boys Perfume",
		  "metaDescription": "A perfume becomes expensive not by the brand it is associated with, but with its aroma. If you want to try affordable popular perfumes in India, Perfumer’s Club is the place for it.",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Lightr+7X8ml.jpg"
		},
		{
		  "urlKey": "online-perfume-shop",
		  "metaTitle": "Online Perfume Shop | Perfume Shop Near me",
		  "metaKeyword": "Online Perfume Shop, Perfume Shop Near me, Original Perfume, Unisex Perfume, Best Unisex Fragrance in India, Top Indian Perfume, Luxury Perfume, Unboxed Perfume, Perfume for Men, Perfume for Women, Perfume for Girls, Boys Perfume",
		  "metaDescription": "When one store is able to fulfil all your perfume desires, why go anywhere else? This one-stop-shop with all kinds of perfumes, gift packs, and amazing deals is exactly what you need. The best thing is that all the perfumes are made in India for your taste.",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Packof3X50ml.jpg"
		},
		{
		  "urlKey": "original-perfume",
		  "metaTitle": "Original Perfume | Original Fragrance Online",
		  "metaKeyword": "Genuine Perfumes, Original Perfume, Unisex Perfume, Best Unisex Fragrance in India, Top Indian Perfume, Luxury Perfume, Unboxed Perfume, Perfume for Men, Perfume for Women, Perfume for Girls, Boys Perfume",
		  "metaDescription": "Not sure if you are buying original perfumes? Now you can smell marvellous all day long with Perfumer’s Club and its authentic scents. Not only affordable but these perfumes also last long and smell mind-blowing. Try it once to experience it yourself.",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Packof3X50ml.jpg"
		},
		{
		  "urlKey": "unisex-perfume",
		  "metaTitle": "Unisex Perfume | Best Unisex Fragrance in India",
		  "metaKeyword": "Unisex Perfume, Best Unisex Fragrance in India, Top Indian Perfume, Luxury Perfume, Unboxed Perfume, Perfume for Men, Perfume for Women, Perfume for Girls, Boys Perfume",
		  "metaDescription": "Unisex fragrances are the big new trend in the perfume industry. If you have not tried one, you are missing something major. They are aromatic and smell unique. With the gender fluidity, unisex scents offer, these are a must for the newer generation.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/PC100000023/Best-Aquatic-And-Citrus-Fregrances-Unisex-1st.png"
		},
		{
		  "urlKey": "XTMTZ",
		  "metaTitle": "Perfumers Club Coupon Code",
		  "metaKeyword": "Perfumers Club Coupon Code",
		  "metaDescription": "Perfumers Club Coupon Code",
		  "image": ""
		},
		{
		  "urlKey": "XTMTY",
		  "metaTitle": "Perfumers Club Coupon Code",
		  "metaKeyword": "Perfumers Club Coupon Code",
		  "metaDescription": "Perfumers Club Coupon Code",
		  "image": ""
		},
		{
		  "urlKey": "XTMTR",
		  "metaTitle": "Perfumers Club Coupon Code",
		  "metaKeyword": "Perfumers Club Coupon Code",
		  "metaDescription": "Perfumers Club Coupon Code",
		  "image": ""
		},
		{
		  "urlKey": "XTFHT",
		  "metaTitle": "Perfumers Club Coupon Code",
		  "metaKeyword": "Perfumers Club Coupon Code",
		  "metaDescription": "Perfumers Club Coupon Code",
		  "image": ""
		},
		{
		  "urlKey": "XTKLT",
		  "metaTitle": "Perfumers Club Coupon Code",
		  "metaKeyword": "Perfumers Club Coupon Code",
		  "metaDescription": "Perfumers Club Coupon Code",
		  "image": ""
		},
		{
		  "urlKey": "best-perfume-for-summer",
		  "metaTitle": "Best Perfume For Summer",
		  "metaKeyword": "Best Perfume For Summer, Perfume for Men, Perfume for Girls, Perfume for Women, Top Indian Perfume",
		  "metaDescription": "Bring out the best in your style by wearing season friendly perfumes. These will make you stand out for a good reason while others wonder about your perfume. If you are still wearing your strong perfume in the summer season",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Packof7X8ml.jpg"
		},
		{
		  "urlKey": "light-perfume",
		  "metaTitle": "Light Perfume",
		  "metaKeyword": "Light Perfume, Best Perfume For Summer, Perfume for Men, Perfume for Girls, Perfume for Women, Top Indian Perfume",
		  "metaDescription": "Shop now perfume that touch to your personality with the opulent range of gentle perfumes. Remarkable scents with elegant and mellow aromas are good for everyday use. They bring out the best in your personality, without overpowering it. ",
		  "image": "https://www.perfumersclub.com/assets/images/home/banner/Lightr+7X8ml.jpg"
		},
		{
		  "urlKey": "strong-perfume",
		  "metaTitle": "Buy Strong Perfume",
		  "metaKeyword": "Strong Perfume, Light Perfume, Best Perfume For Summer, Perfume for Men, Perfume for Girls, Perfume for Women, Top Indian Perfume",
		  "metaDescription": "If you are looking for a highly aromatic perfume range for special moments, we have the best options for you. They can help in bringing out your best self, getting you noticed all around.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/Dec21/ComboPack3Lightr/BFM/Green-3.jpg"
		},
		{
		  "urlKey": "celebrity-perfume",
		  "metaTitle": "Celebrity Perfume | Bollywood Celebrity Perfumes",
		  "metaKeyword": "Perfumes, Perfume for Men, Perfume for Women, Celebrity Perfume",
		  "metaDescription": "Do you also desire to smell like a celebrity? Someone others can follow around, wondering how they smell so good. You do not have to buy those expensive perfumes for this. ",
		  "image": "https://www.perfumersclub.com/assets/images/products/shopnow/Setof3X50mlPerfumes.jpg"
		},
		{
		  "urlKey": "popular-perfumes",
		  "metaTitle": "Popular Perfumes | Best Perfume in India",
		  "metaKeyword": "Perfumes, Perfume for Men, Perfume for Women, Popular Perfumes, Best Perfume in India",
		  "metaDescription": "If you want to stand out, get your hands on the popular perfumes loved by the masses. Trending in every season, these fragrances keep your perfume game on point. They are aromatic, popular, and affordable.",
		  "image": "https://www.perfumersclub.com/assets/images/products/shopnow/Lightr7X8mlPerfumes.jpg"
		},
		{
		  "urlKey": "natural-perfume",
		  "metaTitle": "Natural Perfumes | Best Organic Perfumes in India",
		  "metaKeyword": "Perfumes, Perfume for Men, Perfume for Women, Top India Perfumes, Natural Perfumes, Best Organic Perfumes in India",
		  "metaDescription": "Perfumes with natural essence tends to perform a little bit better. They smell unique and have a long-lasting performance. Being natural, they are also safe on the skin giving you fresh fragrance. There are so many options available in this range for men, women and unisex.",
		  "image": "https://storage.googleapis.com/perfumersclub/images/PC100000023/Best-Aquatic-And-Citrus-Fregrances-Unisex-1st.png"
		},
		{
		  "urlKey": "sandalwood-perfume",
		  "metaTitle": "Sandalwood Perfumes | Online Sandalwood Fragrance",
		  "metaKeyword": "Perfumes, Perfume for Men, Perfume for Women, Sandalwood Perfumes, Online Sandalwood Fragrance",
		  "metaDescription": "Sandalwood is one of the most popular perfume types. It is used in aromatherapy, skincare, and for making various fragrances. Shop now and get doorstep delivery. Avail COD, Prepaid and Free Shipping.",
		  "image": "https://www.perfumersclub.com/assets/images/products/shopnow/Lightr7X8mlPerfumes.jpg"
		},
		{
		  "urlKey": "All-Good-Scents-in-India",
		  "metaTitle": "All Good Scents in India",
		  "metaKeyword": "All Good Scents in India, Perfume for Men, Perfume for Women, Girls Perfume, Luxury Perfume",
		  "metaDescription": "Not all good perfumes in India are expensive. You can easily get some of the best perfumes at affordable prices over here. And for this, it is particularly important to know where you can buy them from. This perfume brand covers all these queries for you.",
		  "image": "https://www.perfumersclub.com/assets/images/products/shopnow/Setof3X50mlPerfumes.jpg"
		},
		{
		  "urlKey": "Online-Perfume-Bazar-in-India",
		  "metaTitle": "Online Perfume Bazar in India",
		  "metaKeyword": "Online Perfume Bazar in India, Perfume for  Men, Perfume for Women, Luxury Perfume, Unisex Perfume,  Unboxed Perfume",
		  "metaDescription": "Perfume shopping is the most exciting thing. Going through all the options, exploring new ones, and waiting to use them. There is so much more to it. And this perfume store has determined to make your online perfume experience even better.",
		  "image": "https://www.perfumersclub.com/assets/images/products/shopnow/Lightr7X8mlPerfumes.jpg"
		}
	  ];
	
    constructor(private title: Title, private meta: Meta, @Inject(DOCUMENT) private doc) {
		let canURL = this.doc.URL;
		let myArray = canURL.split(":3000");
		if ( myArray.length == 1 ) {
			myArray = canURL.split(":4200");
		}
		myArray[0] = "https://www.perfumersclub.com";
		this.canLink = myArray.join('');
   
    }
    setPageTitle(title: string) {
        this.title.setTitle(title);
    }   
    
	getPageTitle() {
        return this.title.getTitle();
    }
    createLinkForCanonicalURL(url?: string) {
		const link: HTMLLinkElement = this.doc.querySelector('link[rel="canonical"]');		
      	link.setAttribute('href', this.canLink);
	}
   
	//create json-ld script tag for bussiness
	
	createJsonLd (rawData, objectType: string = "Website") {
		let jsonData = {
			"@context": "http://schema.org",
			"@type": objectType,
			"name":"Perfumers Club",
			"logo":"https://www.perfumersclub.com/assets/images/logo.svg",
			"image":"https://www.perfumersclub.com/assets/images/logo.svg",
			"hasMap": "",
			"url":  "https://www.perfumersclub.com/",
			"contactPoint":[
				{
					"@type": "ContactPoint",
					"telephone": "+91 9811830806",
					"contactType": "customer care service"
				}
			],
			"address": {       
				"@type": "PostalAddress",
				"image":"https://www.perfumersclub.com/assets/images/logo.svg",
				"email": "mailto:connect@perfumersclub.com",
				"addressLocality": "India",
				"addressRegion": "Delhi",
				"postalCode":"110015",
				"streetAddress": "70B/35A, 4th Floor, Rama Road, Industrial Area"
			},
			"sameAs": [
				"https://www.facebook.com/perfumersclub",
				"https://twitter.com/perfumersclub",
				"https://www.instagram.com/perfumers_club",
				"https://www.youtube.com/channel/UCLh3vMMFgD_iy3Q5tI5kKeg",
				"https://www.linkedin.com/company/perfumersclub"
			],
			"openingHours": "Mo,Tu,We,Th,Fr 09:30-06:30",
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": "28.6595591",
				"longitude": "77.1457528"
			},
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://www.perfumersclub.com/search?q={search_term_string}",
				"query-input": "required name=search_term_string"
		   }
		};
		
		if (rawData) {
		  jsonData = Object.assign({}, jsonData, rawData);
		}
		let script = this.doc.querySelector('script[type="application/ld+json"]');
		script.text = `${JSON.stringify(jsonData)}`;
		return false;
	}
	
	ogMetaTag(ogTitle='', ogDescription='', ogImage='') {
		this.meta.updateTag({property: 'og:url', content: this.canLink});
		this.meta.updateTag({property: 'og:title', content: ogTitle});
		this.meta.updateTag({property: 'og:description', content: ogDescription});
		this.meta.updateTag({property: 'og:image', content: ogImage});	  
	}
   
   createAMPPageLink() {
	  let canonicalElement = this.doc.querySelector('link[rel="canonical"]');
	  let currentLink:string = window.location.origin+"/amp"+window.location.pathname;
      let amphtmlElement: HTMLLinkElement = this.doc.createElement('link');
      amphtmlElement.setAttribute('rel', 'amphtml');
      amphtmlElement.setAttribute('href', currentLink);
	  this.doc.head.insertBefore(amphtmlElement, canonicalElement);
   }
   
   removeAMPPageLink() {   
	  let amphtmlElement = this.doc.querySelector('link[rel="amphtml"]');
	  if ( amphtmlElement ) {
		this.doc.head.removeChild(amphtmlElement);
	  }
   }


}
