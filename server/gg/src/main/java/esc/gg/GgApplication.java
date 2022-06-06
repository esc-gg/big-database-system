package esc.gg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;

import java.nio.charset.Charset;

/**
 * project : esc.gg
 * program name : esc.gg
 * description : [빅데이터베이스시스템 토이 프로젝트] Op.gg 클론 코딩 프로젝트
 * version : 1.0.0
 * @author : 이동우
 * created_date : 2022-05-29
 * modification log
 * ========================================
 * date name description
 * ---------------------------------------
 * 05-29 이동우 MongoDB setting
 * ========================================
 */


@SpringBootApplication
public class GgApplication {
	public static void main(String[] args) {
		SpringApplication.run(GgApplication.class, args);
	}
}
