package com.fellipearaujo.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fellipearaujo.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
