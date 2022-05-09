import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Spin, Tabs, message } from "antd";
import Personalinfo from "../components/Personalinfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";
import axios from "axios";

const { TabPane } = Tabs;
function Profile() {
  const [loading, setloading] = useState(false);
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
  const onFinish = async (values) => {
    setloading(true);
    try {
      const result = await axios.post("api/user/update", { ...values, _id: user._id });
      localStorage.setItem('resumebuilder-user' , JSON.stringify(result.data))
      setloading(false);
      message.success("Profile updated successfuly");
    } catch (error) {
      setloading(false);
      message.error("Registration failed");
    }
  };
  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4><b>Update Profile</b></h4>
        <hr />
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <Personalinfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>

          <button htmlType="submit">UPDATE</button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
