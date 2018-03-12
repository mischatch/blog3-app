
const initial_state = {
  users: {}
};

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users,
});

const UsersReducer = (state = initial_state, action) => {
    switch(action.type){
      case 'USERS_SET' : {
        return applySetUsers(state, action);
      }
      default : return state;
    }
  }

export default UsersReducer;
