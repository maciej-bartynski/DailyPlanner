import React from 'react';
import {Button} from 'react-native';
import {Formik, FormikErrors} from 'formik';
import {iBoardFormCreate} from 'lib/models/board';
import {InputArea, InputText, Positioner} from 'atomic';
import navigationRef from 'lib/navigation/reference';
import {ScrollView} from 'react-native-gesture-handler';
import useBoards from 'lib/hooks/useBoards';

const creationInitialValues: iBoardFormCreate = {
  title: '',
  description: '',
  tasks: [],
};

const BoardForm: React.FC<{
  boardId?: string;
}> = ({boardId}) => {
  const {methods} = useBoards();
  const {updateBoard, getBoard, createBoard} = methods;
  const currentBoard = boardId ? getBoard(boardId) : null;
  const initialValues = Object.assign({}, creationInitialValues);

  if (currentBoard) {
    initialValues.title = currentBoard.title;
    initialValues.description = currentBoard.description;
  }

  const onSubmit = (values: iBoardFormCreate) => {
    if (currentBoard && boardId) {
      updateBoard(boardId, values);
    } else {
      createBoard(values);
    }
  };

  const validate = (values: iBoardFormCreate) => {
    const errors: FormikErrors<iBoardFormCreate> = {};
    const {title} = values;
    if (title.length < 4) {
      errors.title = 'Title should have at least 4 characters';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        dirty,
      }) => (
        <>
          <ScrollView style={{width: '100%', padding: 10}}>
            <InputText
              label="Board title"
              placeholder="eg. Monday"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              expectError={true}
              error={errors.title}
            />

            <InputArea
              label="Description"
              placeholder="Put some description"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              expectError={true}
              error={errors.description}
              numberOfLines={10}
            />

            <Positioner>
              <Button
                disabled={!(isValid && dirty)}
                onPress={() => {
                  handleSubmit();
                  if (isValid) {
                    navigationRef.current?.goBack();
                  }
                }}
                title={boardId ? 'Apply changes' : 'Create board'}
              />
            </Positioner>
          </ScrollView>
        </>
      )}
    </Formik>
  );
};

export default BoardForm;
