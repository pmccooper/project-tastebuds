import { StatusBar } from "expo-status-bar";
import {
  Platform,
  Modal,
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Form,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Carousel from "./components/Carousel";
import MultiSelector from "./components/MultiSelector";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FIELDS = [
  "id",
  "name",
  "image",
  "ingredients",
  "instructions",
  "totaltime",
  "tags",
];

const RECIPES = [
  {
    id: 1,
    name: "Fiorentina Steak",
    image: "spag.jpg",
    ingredients: ["a", "b", "c"],
    instructions: "Longer than this text",
    totaltime: "1.15",
    tags: ["Dinner", "Meat", "Italian"],
  },
  {
    id: 2,
    name: "Sandwich",
    image: "spag.jpg",
    ingredients: ["a", "b", "c"],
    instructions: "Longer than this text",
    totaltime: "1.15",
    tags: ["Lunch", "Meat", "Vegetarian"],
  },
  {
    id: 3,
    name: "Udon",
    image: "spag.jpg",
    ingredients: ["a", "b", "c"],
    instructions: "Longer than this text",
    totaltime: "1.15",
    tags: ["Pasta", "Japanese", "Vegetarian", "Dinner"],
  },
  {
    id: 4,
    name: "Tiramisu",
    image: "spag.jpg",
    ingredients: ["a", "b", "c"],
    instructions: "Longer than this text",
    totaltime: "1.15",
    tags: ["Dessert", "Italian", "Vegan", "Vegetarian"],
  },
  {
    id: 5,
    name: "Spaghetti Bolognese",
    image: "spag.jpg",
    ingredients: ["a", "b", "c"],
    instructions: "Longer than this text",
    totaltime: "1.15",
    tags: ["Dinner", "Pasta", "Italian", "Meat"],
  },
  {
    id: 6,
    name: "Dumplings",
    image: "spag.jpg",
    ingredients: ["a", "b", "c"],
    instructions: "Longer than this text",
    totaltime: "1.15",
    tags: ["Lunch", "Japanese", "Freeze", "Vegetarian", "Meat"],
  },
];

const TAGS = RECIPES.map((recipe) => recipe.tags)
  .flat()
  .filter((v, i, a) => a.indexOf(v) == i);

const recipesByTag = {};

TAGS.map((tag) => {
  const taggedRecipes = [];
  RECIPES.forEach((recipe) => {
    if (recipe.tags.includes(tag)) taggedRecipes.push(recipe);
  });
  recipesByTag[tag] = taggedRecipes;
});

function form() {
  return(
      <div classname="form">
          <h2>Create a Recipe</h2>
              <form>
                <br></br>
                  <label>Title</label>
                  <input type="text"
                   required
                  />                  
                <br></br>
                  <label>Ingredients</label>
                  <input type="text"
                   required
                  />
                 <br></br>
                  <label>Directions</label>
                  <input type="text"
                   required
                  /> 
              </form>
      </div>
      
  );
}

const App = () => {
  const [listFields, setListFields] = useState(["image", "name"]);
  const [view, setView] = useState("carousel");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTagSelection = (tag) => {
    const tags = [...selectedTags];
    const index = tags.indexOf(tag);
    const newSelectedTags =
      index >= 0
        ? [...tags.slice(0, index), ...tags.slice(index + 1, -1)]
        : [...tags, tag];

    // Update list of recipes that have include all tags
    const newFilteredRecipes = [];
    const recipes = filteredRecipes.length ? [...filteredRecipes] : RECIPES;
    recipes.forEach((recipe) => {
      let hasAllTags = newSelectedTags.every((tag) => {
        if (!recipe.tags.includes(tag)) return false;
        return true;
      });
      if (hasAllTags) newFilteredRecipes.push(recipe);
    });
    console.log(newSelectedTags);
    console.log(newFilteredRecipes);
    setSelectedTags(newSelectedTags);
    setFilteredRecipes(newFilteredRecipes);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to TasteBuds</Text>
      <Modal
        style={styles.modal}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() =>{
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Save</Text>
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Hide</Text>
          </Pressable>
          <div classname="form">
            <h2>Create a Recipe</h2>
              <form>
                <br></br>
                  <label>Title</label>
                  <input type="text"
                   required
                  />                  
                <br></br>
                  <label>Ingredients</label>
                  <input type="text"
                   required
                  />
                 <br></br>
                  <label>Directions</label>
                  <input type="text"
                   required
                  /> 
              </form>
          </div>
        </View>  
      </Modal>
      <Pressable
      onPress={() =>setModalVisible(true)}>
        <Text>Create New Recipe</Text>
      </Pressable>
      <MultiSelector items={TAGS} handler={handleTagSelection} />
      {view === "carousel" ? (
        <View>
          {selectedTags.length > 1 ? (
            <Carousel items={filteredRecipes} title={selectedTags.join(", ")} />
          ) : undefined}
          {selectedTags.map((tag, idx) => (
            <Carousel items={recipesByTag[tag]} key={idx} title={tag} />
          ))}
          <Carousel items={RECIPES} title={"All Recipes"} />          
        </View>
      ) : view === "list" ? (
        <ScrollView>
          {(filteredRecipes.length ? filteredRecipes : RECIPES).map(
            (recipe) => (
              <View style={styles.listrow} key={recipe.id}>
                {listFields.map((field, idx) => (
                  <View style={styles.listitem} key={`${recipe.index}-${idx}`}>
                    {field === "image" ? (
                      <Image
                        source={require(`./assets/${recipe.image}`)}
                        style={{ width: 40, height: 40, flex: 1 }}
                      />
                    ) : (
                      <Text
                        style={{
                          width: "fit-content",
                          flex: 3,
                        }}
                      >
                        {recipe[field]}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            )
          )}
        </ScrollView>
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: windowWidth,
  },
  ...Platform.select({
    ios: {
      fontFamily: "Arial",
    },
    android: {
      fontFamily: "Roboto",
    },
  }),
  listrow: {
    paddingHorizontal: 30,
    height: 40,
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
    rowGap: 15,
    justifyContent: "flex-start",
    alignContent: "center",
    borderWidth: 1,
  },
  listitem: {
    display: "flex",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
});

export default App;
