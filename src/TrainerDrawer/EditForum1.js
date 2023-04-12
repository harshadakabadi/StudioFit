import React, { useState, useEffect } from "react";
import { View, Text, Modal, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

const EditModal = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);
  // State to handle modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  // State to store edited data
  const [editedData, setEditedData] = useState({
    title: "",
    category: "",
    content: "",
  });

  // Fetch data from API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`http://${global.MyVar}/api/blog_api/`); // Replace with your API endpoint
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle editing of data
  const handleEdit = () => {
    // Perform data editing logic here
    // ...

    // Close the modal
    setModalVisible(false);
  };
  // Function to handle updating of edited data
  const handleUpdate = () => {
    fetch(`http://${global.MyVar}/api/blog_api/1/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(editedData,{created_by:6,
        updated_by:6,}),
    })
      .then(function (response) {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  {
    /*const handleUpdate = async () => {
    try {
      // Perform API update request with editedData
      await fetch(`http://${global.MyVar}/api/blog_api/`, {
        method: "PATCH", // Replace with the appropriate HTTP method for updating data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      // Close the modal
      setModalVisible(false);

      // Fetch updated data from API
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };*/
  }

  return (
    <SafeAreaView>
      <View mt={100}>
        {/* Button to open the modal */}
        <Button title="Edit Data" onPress={() => setModalVisible(true)} />

        {/* Modal for editing data */}
        <Modal visible={modalVisible} animationType="slide">
          <View>
            {/* Display fetched data in form */}
            <TextInput
              placeholder="Title"
              value={editedData.title}
              onChangeText={(text) =>
                setEditedData({ ...editedData, title: text })
              }
            />
            <Picker
              selectedValue={editedData.category}
              onValueChange={(itemValue) =>
                setEditedData({ ...editedData, category: itemValue })
              }
            >
              {/* Render picker options based on the fetched data */}
              {data &&
                data.map((item) => (
                  <Picker.Item
                    key={item.id}
                    label={item.category}
                    value={item.category}
                  />
                ))}
            </Picker>
            <TextInput
              placeholder="Content"
              value={editedData.content}
              onChangeText={(text) =>
                setEditedData({ ...editedData, content: text })
              }
            />

            {/* Button to close the modal */}
            <Button title="Close" onPress={() => setModalVisible(false)} />

            {/* Button to submit edited data */}
            <Button title="Save" onPress={handleUpdate} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default EditModal;
