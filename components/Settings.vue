<template>
    <div>
        <PopoverRoot>
            <PopoverTrigger class="Item Settings">
                <Icon name="radix-icons:mixer-horizontal" />
            </PopoverTrigger>
            <PopoverPortal>
                <PopoverContent>
                    <div class="Content">
                        <div class="flex flex-col gap-2.5">
                            <p class="Title">Settings</p>
                            <fieldset>
                                <label for="bpm"> BPM </label>
                                <input id="bpm" defaultValue=60>
                            </fieldset>
                            <fieldset>
                                <label for="singleDrum"> Single Drum Bars </label>
                                <input id="singleDrum" defaultValue=5>
                            </fieldset>
                            <fieldset>
                                <label for="multiDrum"> Multi Drum Bars </label>
                                <input id="multiDrum" defaultValue=5>
                            </fieldset>
                        </div>
                        <PopoverClose class="Close">
                        <Icon name="radix-icons:cross-2" />
                    </PopoverClose>
                    <PopoverArrow class="fill-white stroke-gray-200" />
                </div>
                </PopoverContent>
            </PopoverPortal>
        </PopoverRoot>
        </div>
</template>

<style lang="css" scoped>
.Item {
    @apply flex items-center justify-center h-10 w-10 m-2 rounded-lg shadow-md
}

.Settings {
    @apply bg-pink-500
}

.Content {
    @apply rounded-lg p-5 w-[260px] bg-white shadow-sm border
}

.Title {
    @apply text-sm leading-[19px] font-semibold mb-2.5
}

fieldset {
    @apply flex gap-5 items-center
}

label {
    @apply text-xs  w-[75px]
}

input {
    @apply w-full inline-flex bg-stone-50 items-center justify-center flex-1 rounded px-2.5 text-xs leading-none shadow-[0_0_0_1px] h-[25px] focus:shadow-[0_0_0_2px] outline-none
}

.Close {
    @apply rounded-full h-[25px] w-[25px] inline-flex items-center justify-center absolute top-[8px] right-[8px] focus:shadow-[0_0_0_2px] outline-none cursor-default
}
</style>