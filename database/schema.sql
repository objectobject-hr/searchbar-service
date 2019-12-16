DROP DATABASE IF EXISTS meatballs;

CREATE DATABASE meatballs;

USE meatballs;

CREATE TABLE cranberries (
  id int NOT NULL AUTO_INCREMENT,
  letter varchar(1) NOT NULL,
  primero varchar(20) NOT NULL,
  secondRow varchar(60) NOT NULL,
  img varchar(300),
  nombre varchar(25) NOT NULL,
  descrip varchar(40) NOT NULL,
  stats varchar(40) NOT NULL DEFAULT '',
  PRIMARY KEY (ID)
);

INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("a", "lex", "ALGOT Planner", "https://www.ikea.com/us/en/images/products/alex-drawer-unit-white__0087723_PE217289_S5.JPG?f=xu", "ALEX", "Drawer unit,", "14 1/8x27 1/2");
INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("a", "lex drawer unit", "Armchairs & chaises", "https://www.ikea.com/us/en/images/products/alex-drawer-unit-with-9-drawers-white__0085835_PE213729_S5.JPG?f=xu", "ALEX", "Drawer unit with 9 drawers,", "14 1/8X45 5/8");
INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("a", "rmchair", "Arts & crafts", "https://www.ikea.com/us/en/images/products/linnmon-alex-table-white__0737597_PE741188_S5.JPG?f=xu", "LINNMON / ALEX", "Table,", "47 1/4x23 5/8");
INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("a", "lex desk", "IKEA ART EVENT 2019 LIMITED COLLECTION", "https://www.ikea.com/us/en/images/products/alex-drawer-unit-with-drop-file-storage__0377858_PE554184_S5.JPG?f=xu", "ALEX", "Drawer unit/drop file storage,", "14 1/8x27 1/2");
INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("a", "rea rug", "The art of organizing: toy storage", "https://www.ikea.com/us/en/images/products/alex-drawer-unit-on-castors-white__0627104_PE693180_S5.JPG?f=xu", "ALEX", "Drawer unit on casters,", "26 3/8x26");
INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip) VALUES("a", "lgot", "How to make a KIY canvas for your artwork", "https://www.ikea.com/us/en/images/products/pello-armchair__38296_PE130209_S5.JPG?f=xu", "PELLO", "Armchair");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("b");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("b");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("b");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("b");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("c");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("c");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("c");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("c");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("d");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("d");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("d");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("d");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("e");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("e");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("e");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("e");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("f");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("f");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("f");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("f");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("g");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("g");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("g");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("g");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("h");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("h");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("h");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("h");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("i");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("i");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("i");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("i");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("j");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("j");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("j");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("j");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("k");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("k");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("k");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("k");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("l");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("l");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("l");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("l");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("m");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("m");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("m");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("m");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("n");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("n");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("n");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("n");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("o");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("o");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("o");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("o");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("p");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("p");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("p");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("p");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("q");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("q");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("q");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("q");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("r");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("r");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("r");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("r");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("s");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("s");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("s");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("s");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("t");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("t");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("t");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("t");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("u");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("u");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("u");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("u");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("w");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("w");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("w");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("w");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("x");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("x");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("x");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("x");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("y");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("y");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("y");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("y");

-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("z");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("z");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("z");
-- INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("z");