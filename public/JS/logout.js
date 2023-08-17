const Confirm = (event) => {
    const result = confirm("Are you sure you want to proceed with logout?");
    if (result) {
      // The user clicked 'OK', perform the delete action here.
      console.log("Successfully logged out");
    } else{
      // The user clicked 'Cancel', handle the cancellation here.
      event.preventDefault();
    }
  };
