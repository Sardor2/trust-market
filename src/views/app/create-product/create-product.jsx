import { LinearProgress, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/custom-input";
import Form from "../../../components/form";
import Select from "../../../components/select";
import { CreateWrapper, DeleteButton, UploadBox } from "./styles";
import Button from "../../../components/button";
import useCategories from "../../../services/queries/use-categories";
import useCreateProduct from "../../../services/mutations/use-create-product";
import useUpload from "../../../services/mutations/use-upload";
import AddIcon from "@mui/icons-material/Add";
import FileInput from "../../../components/file-input";

const CreateProduct = () => {
  const { control, handleSubmit, reset } = useForm();
  const { mutate, isLoading } = useCreateProduct();
  const categories = useCategories();
  const [image, setImage] = useState(undefined);

  const { mutate: upload, isLoading: isUploading } = useUpload();

  const onSubmit = (data) => {
    console.log(data);
    mutate(
      {
        ...data,
        sale: +data.sale || 0,
        image: image?.id,
      },
      {
        onSuccess() {
          reset();
        },
      }
    );
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    upload(file, {
      onSuccess(data) {
        console.log(data, "sfas");
        setImage({ id: data.id, url: URL.createObjectURL(file) });
      },
    });
  };

  return (
    <>
      <Modal open={isUploading}>
        <LinearProgress variant="indeterminate" />
      </Modal>
      <CreateWrapper>
        <Typography sx={{ textAlign: "center" }} variant="h4" component="h4">
          Create Product
        </Typography>
        <UploadBox src={image?.url ?? ""}>
          {!image && (
            <FileInput onChange={onImageUpload}>
              <AddIcon />
              <Typography
                sx={{ textAlign: "center" }}
                variant="subtitle1"
                component="div"
              >
                Upload image
              </Typography>
            </FileInput>
          )}
          {image && <DeleteButton onClick={() => setImage(null)} />}
        </UploadBox>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput name="name" control={control} label="Name" />
          <CustomInput
            name="price"
            control={control}
            label="Price"
            type="number"
          />

          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Select
                {...field}
                label="Category"
                options={categories.data?.map((item) => ({
                  value: item.id,
                  name: item.name,
                }))}
                inputProps={{
                  style: { width: "100%" },
                }}
              />
            )}
          />

          <CustomInput
            name="sale"
            control={control}
            label="Discount"
            type="text"
            required={false}
          />

          <CustomInput
            name="description"
            control={control}
            label="Description"
            multiline
            rows={5}
            placeholder="This product is from Usa"
          />
          <Button isLoading={isLoading} type="submit" variant="contained">
            Create
          </Button>
        </Form>
      </CreateWrapper>
    </>
  );
};

export default CreateProduct;
