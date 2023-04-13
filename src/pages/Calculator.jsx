import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
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
    usedQuantity: yup.number().required().min(1).max(1000),
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
      type: "product",
      calc: 0,
      totalProductCost: 0,
    },
  });

  const type = useWatch({
    control,
    name: "type",
  });

  const calc = useWatch({
    control,
    name: "calc",
  });

  const usedQuantity = useWatch({
    control,
    name: "usedQuantity",
  });

  const onSubmit = (data) => {
    // console.log(data);
    const cost = parseFloat(parseFloat(data.price / data.quantity).toFixed(2));
    const totalProductCost = parseFloat(
      parseFloat(cost * usedQuantity).toFixed(2)
    );
    setValue("calc", cost);
    setValue("totalProductCost", totalProductCost);
  };

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
              <>
                <Form.Group className="mb-3" as={Col} xs="12">
                  <Form.Label>Enter Product Quantity (ml)</Form.Label>
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

                <Form.Group className="mb-3" as={Col} xs="12">
                  <Form.Label>Enter Product Quantity Used (ml)</Form.Label>
                  <Form.Control
                    type="text"
                    // name="firstName"
                    {...register("usedQuantity")}
                    isInvalid={!!errors.usedQuantity?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.usedQuantity?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </>
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
            <>
              <Form.Group className="mb-3" as={Col} xs="12">
                <Form.Label>
                  {type === "product" ? "Per ml cost" : "Per piece cost"}
                </Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  {...register("calc")}
                  isInvalid={!!errors.calc?.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.calc?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {type === "product" ? (
                <Form.Group className="mb-3" as={Col} xs="12">
                  <Form.Label>Total Cost</Form.Label>
                  <Form.Control
                    type="text"
                    disabled
                    {...register("totalProductCost")}
                    isInvalid={!!errors.totalProductCost?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.totalProductCost?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              ) : null}
            </>
          ) : null}

          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </Layout>
  );
}

export default FormExample;
