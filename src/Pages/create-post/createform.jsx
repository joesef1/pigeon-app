import React from 'react'
import { UseForm } from 'react-hook-form'
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";




const createform = () => {
  const schema = yup.object.shape({
     title: yup.string().required("You must add a title."),
     discription: yup.string().required("You must add a discription."),
  })
  const { register } = UseForm({
    resolver: yupResolver(schema),
  });

  return (
    <form>
      <input placeholder='title..' {...register} />
      <textarea placeholder='discription..' />
      <input type="submit" />
    </form>
  )
}


export default createform

