<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  name: 'Contact',
  layout: 'default',
})

useSeoMeta({
  title: 'Contact',
  description:
    'Contact page for Vue/Nuxt frontend opportunities, freelance projects, and product collaborations.',
})

const contactSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Please enter at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    details: z.string().min(15, 'Please provide a little more context (at least 15 characters).'),
  })
)

// vee-validate keeps validation rules and form state in one predictable place.
const { defineField, errors, handleSubmit, resetForm } = useForm({
  validationSchema: contactSchema,
  initialValues: {
    name: '',
    email: '',
    details: '',
  },
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [details, detailsAttrs] = defineField('details')

const submitted = ref(false)
const submitError = ref('')
const isSubmitting = ref(false)

const onSubmit = handleSubmit(async (values) => {
  submitted.value = false
  submitError.value = ''
  isSubmitting.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: values,
    })

    submitted.value = true
    resetForm()
  }
  catch {
    submitError.value = 'Unable to send your message right now. Please try again shortly.'
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <div class="space-y-8 pb-10 [animation:fade-in_500ms_ease-out]">
    <PortfolioSectionHeader
      eyebrow="Contact"
      title="Let’s build something meaningful"
      description="Open to Vue/Nuxt frontend roles, freelance opportunities, and product collaboration."
    />

    <section class="max-w-2xl rounded-xl border bg-card p-6">
      <form class="space-y-4" @submit.prevent="onSubmit">
        <div class="space-y-1">
          <label for="name" class="text-sm font-medium">Full Name</label>
          <input
            id="name"
            v-model="name"
            v-bind="nameAttrs"
            type="text"
            class="w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
          <p v-if="errors.name" class="text-xs text-red-600">{{ errors.name }}</p>
        </div>

        <div class="space-y-1">
          <label for="email" class="text-sm font-medium">Email</label>
          <input
            id="email"
            v-model="email"
            v-bind="emailAttrs"
            type="email"
            class="w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
          <p v-if="errors.email" class="text-xs text-red-600">{{ errors.email }}</p>
        </div>

        <div class="space-y-1">
          <label for="details" class="text-sm font-medium">Project or Role Details</label>
          <textarea
            id="details"
            v-model="details"
            v-bind="detailsAttrs"
            rows="5"
            class="w-full rounded-md border bg-background px-3 py-2 text-sm"
          ></textarea>
          <p v-if="errors.details" class="text-xs text-red-600">{{ errors.details }}</p>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <p v-if="submitted" class="mt-4 text-sm text-emerald-600">
        Thanks for reaching out. I will get back to you soon.
      </p>
      <p v-if="submitError" class="mt-4 text-sm text-red-600">
        {{ submitError }}
      </p>
    </section>
  </div>
</template>
