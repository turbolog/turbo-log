import {update,getPosts,addPost} from "./forumReduce"
import {updateImage,getID} from "./formReducer"






describe("forumReducer functions return corresponding action type", () => {
    test("getPosts returns the right Type", () => {
      expect(getPosts().type).toEqual("GET_POSTS");
    });
    test("update() returns the right Type", () => {
      expect(update().type).toEqual("UPDATE_FORUM");
    });
    test("addPost returns the right Type", () => {
      expect(addPost().type).toEqual("ADD_POST");
    });
    test("updateImage returns the right Type", () => {
      expect(updateImage().type).toEqual("UPDATE_FORM");
    });
    test("getID returns the right Type", () => {
      expect(getID().type).toEqual("GET_ID");
    });
   
  });