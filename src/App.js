import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MDBContainer } from "mdbreact";
import "react-toastify/dist/ReactToastify.min.css";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute"
import Header from "./Components/Header/Header";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import FindJob from "./Pages/FindJob/FindJob";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import TutorRegister from "./Pages/TutorRegister/TutorRegister";
import TutorRegistration from "./Pages/Registration/TutorRegistration";
import HireTutorRegistration from "./Pages/Registration/HireTutorRegistration";
import TeacherProfile from "./Pages/TeacherProfile/TeacherProfile";
import GuardianProfile from "./Pages/GuardianProfile/GuardianProfile"
import HireTutor from "./Pages/HireTutor/HireTutor";
import ProfileSitting from "./Pages/ProfileSitting/ProfileSitting";
import JobDetails from "./Pages/JobDetails/JobDetails";
import AskForTutor from "./Pages/AskForTutor/AskForTutor";
import BookSale from "./Pages/BookSale/BookSale";
import BookSaleCover from "./Pages/BookSaleCover/BookSaleCover";
import BookSaleDetails from "./Pages/BookSaleDetails/BookSaleDetails";
import GetTutorial from "./Pages/GetTutorial/GetTutorial";
import TutorialDetails from "./Pages/TutorialDetails/TutorialDetails";
import Contact from "./Pages/Contact/Contact";
import StudyInAbroad from "./Pages/StudyInAbroad/StudyInAbroad"
import Footer from "./Components/Footer/Footer";
import AddTutorial from "./Pages/AddTutorial/AddTutorial";
import TutorList from "./Pages/TutorList/TutorList"
import TutorDetails from "./Pages/TutorDetails/TutorDetails"
import EmailResume from "./Pages/EmailResume/EmailResume"
import AskForTutorAll from "./Pages/AskForTutorAll/AskForTutorAll"
import TuitionDetails from "./Pages/TuitionDetails/TuitionDetails"
import BookOrder from "./Pages/BookOrder/BookOrder"
import TutorialOrder from "./Pages/TutorialOrder/TutorialOrder"
import TutorialList from "./Pages/TutorialList/TutorialList"
import GetMyTutorialDetails from "./Pages/GetMyTutorialDetails/GetMyTutorialDetails"
import GuardianProfileSetting from "./Pages/GuardianProfileSetting/GuardianProfileSetting"
import PostTutorDetails from "./Pages/PostTutorDetails/PostTutorDetails"
import Cartlist from "./Pages/Cart/Cart"
import Author from "./Pages/SubBook/Author"
import Category from "./Pages/SubBook/Category"
import Publisher from "./Pages/SubBook/Publisher"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main className="main-content">
            <Route exact path="/" component={Home} />
            <Route path="/find-job" component={FindJob} />
            <Route path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/register/become_tutor"
              component={TutorRegistration}
            />
            <Route exact path="/register/hire_tutor" component={HireTutorRegistration} />
            <PrivateRoute exact path="/teacher_profile" component={TeacherProfile} />
            <PrivateRoute exact path="/guardian_profile" component={GuardianProfile} />
            <Route exact path="/hire_tutor" component={HireTutor} />
            <Route path="/profile/sitting" component={ProfileSitting} />
            <Route path="/jobdetails/:id" component={JobDetails} />
            <Route path="/ask_for_tutor" component={AskForTutor} />
            <Route path="/ask_for_tutor_all" component={AskForTutorAll} />
            <Route exact path="/book_sale" component={BookSaleCover} />
            <Route exact path="/book_sale/author" component={Author} />
            <Route exact path="/book_sale/category" component={Category} />
            <Route exact path="/book_sale/publisher" component={Publisher} />
            <Route exact path="/book_sale/items/:class" component={BookSale} />
            <Route exact path="/book_sale/item/details/:id" component={BookSaleDetails} />
            <Route exact path="/book_sale/details/order" component={BookOrder} />
            <Route exact path="/get_tutorial" component={GetTutorial} />
            <Route exact path="/add/toturial" component={AddTutorial} />
            <Route exact path="/tutorial/lists" component={TutorialList} />
            <Route path="/get_tutorial/:id" component={TutorialDetails} />
            <Route path="/get_my_tutorial/:id" component={GetMyTutorialDetails} />
            <Route path="/contact" component={Contact} />
            <Route path="/study_in_abroad" component={StudyInAbroad} />
            <Route exact path="/tutor_list" component={TutorList} />
            <Route path="/tutor_list/:id" component={TutorDetails} />
            <Route path="/tutor/details/:id" component={PostTutorDetails} />
            <Route path="/profile/email_resume" component={EmailResume} />
            <Route path="/guardian_profile/tuition/:id" component={TuitionDetails} />
            <Route path="/profile-setting" component={GuardianProfileSetting} />
            <Route path="/tutorial/order" component={TutorialOrder} />
            <Route path="/profile/cart" component={Cartlist} />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
