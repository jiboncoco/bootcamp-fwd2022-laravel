@extends('layouts.default')

@section('title', 'Payment')

@section('content')

    <!-- Content -->
    <div class="min-h-screen">
        <div class="max-w-7xl grid lg:grid-cols-12 mx-auto pt-14 lg:pt-20 pb-20 lg:pb-28 lg:divide-x px-4 lg:px-16">

            <!-- Detail Payment -->
            <div class="lg:col-span-7 lg:pl-8 lg:pr-20">
                <!-- Doctor Information -->
                <div class="flex flex-wrap items-center space-x-5">
                    <div class="flex-shrink-0">
                        <img src="{{ url(Storage::url($appointment->doctor->photo)) ?? '' }}" class="w-20 h-20 rounded-full bg-center object-cover object-top" alt="Doctor 1"/>
                    </div>

                    <div class="flex-1 space-y-1">
                        <div class="text-[#1E2B4F] text-lg font-semibold">
                            {{ $appointment->doctor->name ?? '' }}
                        </div>
                        <div class="text-[#AFAEC3]">{{ $appointment->doctor->specialist->name ?? '' }}</div>

                        <!--
                        Icon when mobile is show.
                        star icon mobile: "flex/show", star icon dekstop: "hidden"
                        -->
                        <div class="lg:hidden flex items-center gap-x-2">
                        <div class="flex items-center gap-2">
                            <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                            />
                            </svg>

                            <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                            />
                            </svg>

                            <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                            />
                            </svg>

                            <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                            />
                            </svg>

                            <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                            />
                            </svg>
                        </div>
                        <span class="text-[#1E2B4F] font-medium"> (12,495) </span>
                        </div>
                    </div>

                    <!--
                        Icon when desktop is show.
                        star icon mobile: "hidden", star icon dekstop: "flex/show"
                    -->
                    <div class="hidden lg:flex items-center gap-x-2">
                        <div class="flex items-center gap-2">
                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                                />
                            </svg>

                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                                />
                            </svg>

                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                                />
                            </svg>

                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                                />
                            </svg>

                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                fill="#FFB340"
                                />
                            </svg>
                        </div>
                        <span class="text-[#1E2B4F] font-medium"> (12,495) </span>
                    </div>
                </div>

                <!-- Appoinment Information -->
                <div class="mt-16">
                    <h5 class="text-[#1E2B4F] text-lg font-semibold">Appointment</h5>
                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Kebutuhan konsultasi</div>
                        <div class="text-[#1E2B4F] font-medium">{{ $appointment->consultation->name ?? '' }}</div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Level</div>
                        <div class="text-[#1E2B4F] font-medium">
                            @if ($appointment->level == 1)
                                {{ 'Low' }}
                            @elseif ($appointment->level == 2)
                                {{ 'Medium' }}
                            @elseif ($appointment->level == 3)
                                {{ 'High' }}
                            @else
                                {{ 'N/A' }}
                            @endif
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Dijadwalkan pada</div>
                        <div class="text-[#1E2B4F] font-medium">{{ date("d F Y",strtotime($appointment->date)) ?? '' }}</div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Waktu</div>
                        <div class="text-[#1E2B4F] font-medium">{{ date("H:i",strtotime($appointment->time)) ?? '' }}</div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Status</div>
                        <div class="text-[#1E2B4F] font-medium">
                            @if ($appointment->status == 1)
                                {{ 'Payment Completed' }}
                            @elseif ($appointment->status == 2)
                                {{ 'Waiting Payment' }}
                            @else
                                {{ 'N/A' }}
                            @endif
                        </div>
                    </div>
                </div>

                <!-- Payment Information -->
                <div class="mt-16">
                    <h5 class="text-[#1E2B4F] text-lg font-semibold">
                        Payment Information
                    </h5>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Biaya konsultasi</div>
                        <div class="text-[#1E2B4F] font-medium">{{ 'IDR '.number_format($appointment->doctor->specialist->price) ?? '' }}</div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Fee dokter</div>
                        <div class="text-[#1E2B4F] font-medium">{{ 'IDR '.number_format($appointment->doctor->fee) ?? '' }}</div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Fee hospital</div>
                        <div class="text-[#1E2B4F] font-medium">{{ 'IDR '.number_format($config_payment->fee) ?? '' }}</div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">VAT {{ $config_payment->vat ?? '' }}%</div>
                        <div class="text-[#1E2B4F] font-medium">{{ 'IDR '.number_format($total_with_vat) ?? '' }}</div>
                    </div>

                    <div class="flex items-center justify-between mt-5">
                        <div class="text-[#AFAEC3] font-medium">Grand total</div>
                        <div class="text-[#2AB49B] font-semibold">{{ 'IDR '.number_format($grand_total) ?? '' }}</div>
                    </div>
                </div>
            </div>

             <!-- Choose Payment -->
            <div class="lg:col-span-5 lg:pl-20 lg:pr-7 mt-10 lg:mt-0">
                <h3 class="text-[#1E2B4F] text-3xl font-semibold leading-normal">Choose Your <br />Payment Method
                </h3>

                <form action="{{ route('payment.store') }}" method="POST" enctype="multipart/form-data" x-data="{ payment: '' }" class="mt-8">

                    @csrf

                    <!-- List Payment -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-5">
                        <div class="relative">
                            <input
                                type="radio"
                                name="payment"
                                x-model="payment"
                                value="master-card"
                                id="master-card"
                                class="sr-only peer"
                            />

                            <label
                                class="flex flex-col justify-center items-center bg-white border-[#EDEDED] cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#0D63F3] peer-checked:ring-2 peer-checked:border-transparent rounded-3xl border-2 p-7"
                                for="master-card"
                            >
                                <img
                                src="{{ asset('/assets/frontsite/images/master-card.png') }}"
                                class="max-h-[50px] inline-block"
                                alt="Master card"
                                />
                            </label>
                        </div>

                        <div class="relative">
                            <input
                                type="radio"
                                name="payment"
                                x-model="payment"
                                value="visa"
                                id="visa"
                                class="sr-only peer"
                            />
                            <label
                                class="flex flex-col justify-center items-center bg-white border-[#EDEDED] cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#0D63F3] peer-checked:ring-2 peer-checked:border-transparent rounded-3xl border-2 p-7"
                                for="visa"
                            >
                                <img
                                src="{{ asset('/assets/frontsite/images/visa.png') }}"
                                class="max-h-[50px] inline-block"
                                alt="Master card"
                                />
                            </label>
                        </div>

                        <div class="relative">
                            <input
                                type="radio"
                                name="payment"
                                x-model="payment"
                                value="cirrus"
                                id="cirrus"
                                class="sr-only peer"
                            />
                            <label
                                class="flex flex-col justify-center items-center bg-white border-[#EDEDED] cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#0D63F3] peer-checked:ring-2 peer-checked:border-transparent rounded-3xl border-2 p-7"
                                for="cirrus"
                            >
                                <img
                                src="{{ asset('/assets/frontsite/images/cirrus.png') }}"
                                class="max-h-[50px] inline-block"
                                alt="Master card"
                                />
                            </label>
                        </div>

                        <div class="relative">
                            <input
                                type="radio"
                                name="payment"
                                x-model="payment"
                                value="mewallet"
                                id="mewallet"
                                class="sr-only peer"
                            />
                            <label
                                class="flex flex-col justify-center items-center bg-white border-[#EDEDED] cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#0D63F3] peer-checked:ring-2 peer-checked:border-transparent rounded-3xl border-2 p-7"
                                for="mewallet"
                            >
                                <img
                                src="{{ asset('/assets/frontsite/images/mewallet.png') }}"
                                class="max-h-[50px] inline-block"
                                alt="Master card"
                                />
                                <div class="text-[11px] sm:text-sm mt-3">Balance: $18,000</div>
                            </label>
                        </div>
                    </div>

                    <div class="mt-10 grid">

                        <input type="hidden" name="appointment_id" value="{{ $id ?? '' }}">

                        <!--
                        button when payment is filled.
                        -->
                        <button type="submit" class="bg-[#0D63F3] text-white px-10 py-3 rounded-full text-center" x-show="payment.length" onclick="return confirm('Are you sure want to payment this appointment ?')">Pay Now</button>

                        <!--
                        button when payment is empty.
                        -->
                        <span
                            x-show="!payment.length"
                            class="bg-[#C0CADA] text-[#808997] cursor-not-allowed px-10 py-3 rounded-full text-center"
                            >
                            Pay Now
                        </span>
                    </div>
                </form>
            </div>

        </div>
    </div>

@endsection
