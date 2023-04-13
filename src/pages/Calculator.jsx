import { FloatingLabel, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import Layout from "../Layout/Layout";

import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    price: yup.number("Please Enter a number").min(1).max(100000).required(),
    type: yup.string().required(),
    quantity: yup.number().required().min(1).max(1000),
  })
  .required();

function FormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: "quantity",
      calc: 0,
    },
  });

  const onSubmit = (data) => {
    // console.log(data);
    const cost = parseFloat(data.price / data.quantity).toFixed(2);
    setValue("calc", parseFloat(cost));
  };

  const type = useWatch({
    control,
    name: "type",
  });

  const calc = useWatch({
    control,
    name: "calc",
  });

  return (
    <Layout>
      <div
        className="container"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1 className="mt-5 mb-5">Cost Calculator</h1>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group className="mb-3" as={Col} xs="12">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                {...register("price")}
                isInvalid={!!errors.price?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select the type</Form.Label>
              <Stack direction="horizontal" gap={3}>
                <Form.Check
                  inline
                  type="radio"
                  {...register("type")}
                  label="Quantity"
                  value="quantity"
                />
                <Form.Check
                  inline
                  type="radio"
                  value="product"
                  {...register("type")}
                  label="Product"
                />
              </Stack>
            </Form.Group>

            {type === "product" ? (
              <Form.Group className="mb-3" as={Col} xs="12">
                <Form.Label>Enter Product Quanitiy (ml)</Form.Label>
                <Form.Control
                  type="text"
                  // name="firstName"
                  {...register("quantity")}
                  isInvalid={!!errors.age?.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.quantity?.message}
                </Form.Control.Feedback>
              </Form.Group>
            ) : (
              <Form.Group className="mb-3" as={Col} xs="12">
                <Form.Label>Enter Total Quantity (Pieces)</Form.Label>
                <Form.Control
                  type="text"
                  // name="firstName"
                  {...register("quantity")}
                  isInvalid={!!errors.quantity?.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.quantity?.message}
                </Form.Control.Feedback>
              </Form.Group>
            )}
          </Row>

          {calc > 0 ? (
            <Form.Group className="mb-3" as={Col} xs="12">
              <Form.Label>Your cost</Form.Label>
              <Form.Control
                type="text"
                // name="firstName"
                {...register("calc")}
                isInvalid={!!errors.calc?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.calc?.message}
              </Form.Control.Feedback>
            </Form.Group>
          ) : null}

          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </Layout>
  );
}

export default FormExample;
