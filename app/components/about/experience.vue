<template>
    <Stepper orientation="vertical" class="flex w-full max-w-md flex-col justify-start gap-10">
        <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
            class="relative flex w-full items-start gap-6" :step="3">
            <StepperSeparator v-if="step.step !== steps[steps.length - 1]?.step"
                class="absolute left-4.5 top-9.5 block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />
            <StepperTrigger as-child>
                <Button :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'" size="icon"
                    class="z-10 rounded-full shrink-0"
                    :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']">
                    <Check v-if="state === 'completed'" class="size-5" />
                    <Circle v-if="state === 'active'" />
                    <Dot v-if="state === 'inactive'" />
                </Button>
            </StepperTrigger>
            <div class="flex flex-col gap-1">
                <StepperTitle :class="[state === 'active' && 'text-primary']"
                    class="text-sm font-semibold transition lg:text-base">
                    {{ step.title }}
                </StepperTitle>
                <StepperDescription :class="[state === 'active' && 'text-primary']"
                    class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm">
                    {{ step.description }}
                </StepperDescription>
            </div>
        </StepperItem>
    </Stepper>
</template>
<script setup lang="ts">
import { Check, Circle, Dot } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'

const steps = [
     {
        step: 1,
        title: 'Frontend Web Developer @Stabilityy',
        description:
            'Working as a vue js web developer responsible for developing web application.',
    },
    {
        step: 2,
        title: 'Frontend Web Developer @Yaseo',
        description: 'Working on a team responsible for developing new websites, web apps and also working on ON-PAGE SEO of both new and existing websites.',
    },
    {
        step: 3,
        title: 'Fullstack Web Developer @4Slash',
        description: 'Worked as a web developer responsible for developing new websites and web application as well as enhancing, modifying existing web apps.',
    },
    
   
]
</script>