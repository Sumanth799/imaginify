import React from 'react'

const AddTransformationTypePage = () => {
  return (
    <div>AddTransformationTypePage</div>
  )
}

export default AddTransformationTypePage



// import Header from '@/components/shared/Header'
// import React from 'react'
// import { transformationTypes } from '@/constants'
// import TransformationForm from '@/components/shared/TransformationForm';
// import { getUserById } from '@/lib/actions/users.action';
// import { auth } from '@clerk/nextjs';
// import { redirect } from 'next/navigation';


// const AddTransformationTypePage = async ({ params: { type } }:
//   SearchParamProps) => {
//   const { userId } = auth();
//   const transformation = transformationTypes[type];
//   if (!userId) redirect('/sign-in')

//   // const user = await getUserById(userId);

//   return (
//     <>
//       <Header
//         title={transformation.title}
//         subtitle={transformation.subTitle}
//       />

//       {/* <TransformationForm
//         action="Add"
//         userId={user._id}
//         type={transformation.type as
//           TransformationTypeKey}
//         creditBalance={user.creditBalence}
//       /> */}

//     </>
//   )
// }

// export default AddTransformationTypePage/

